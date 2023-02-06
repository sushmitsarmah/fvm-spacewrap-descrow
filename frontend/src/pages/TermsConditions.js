import React from "react";
import lighthouse from '@lighthouse-web3/sdk';
import { LIGHTHOUSE_KEY } from '../config';

const TermsConditions = () => {
    const [fileURL, setFileURL] = React.useState('https://gateway.lighthouse.storage/ipfs/QmSktPrNgPw1fK4DBYrcD45JLqXo6vCFTK1Y3rx32iLvQq');

    const progressCallback = (progressData) => {
        let percentageDone =
            100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
        console.log(percentageDone);
    };

    /* Decrypt file */
    const download = async () => {
        // Fetch file encryption key
        const cid = "QmSktPrNgPw1fK4DBYrcD45JLqXo6vCFTK1Y3rx32iLvQq"; //replace with your IPFS CID
        const { publicKey, signedMessage } = await sign_auth_message();
        console.log(signedMessage)
        /*
          fetchEncryptionKey(cid, publicKey, signedMessage)
            Parameters:
              CID: CID of the file to decrypt
              publicKey: public key of the user who has access to file or owner
              signedMessage: message signed by the owner of publicKey
        */
        const keyObject = await lighthouse.fetchEncryptionKey(
            cid,
            publicKey,
            signedMessage
        );

        // Decrypt file
        /*
          decryptFile(cid, key, mimeType)
            Parameters:
              CID: CID of the file to decrypt
              key: the key to decrypt the file
              mimeType: default null, mime type of file
        */

        const fileType = "image/jpeg";
        const decrypted = await lighthouse.decryptFile(cid, keyObject.data.key, fileType);
        console.log(decrypted)
        /*
          Response: blob
        */

        // View File
        const url = URL.createObjectURL(decrypted);
        console.log(url);
        setFileURL(url);
    };

    const deploy = async (e) => {
        // Push file to lighthouse node
        // Both file and folder supported by upload function
        const output = await lighthouse.upload(e, LIGHTHOUSE_KEY, progressCallback);
        console.log('File Status:', output);
        /*
          output:
            {
              Name: "filename.txt",
              Size: 88000,
              Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
            }
          Note: Hash in response is CID.
        */

        console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
    }

    return (
        <div className="flex flex-col gap-4 pt-5">
      <div className="flex flex-row gap-4 float-right w-[50%]">
        <a href="/agreement">Contract Agreement</a>
        <a href="/contracts">Contracts</a>
        <a href="/marketplace">Marketplace</a>
          <a href="/terms-conditions">Terms and Conditions</a>
          <a href="/walkthrough">Site Walkthrough</a>
      </div>
            <h1>Download Agreement, Sign the Document and Upload</h1>
            {/* <button className="btn btn-primary" onClick={() => download()}>Download Agreement</button> */}
            {
                fileURL ?
                    <a className="btn btn-primary" href={fileURL} target="_blank">viewFile</a>
                    :
                    null
            }


            <input onChange={e => deploy(e)} type="file" />
        </div>
    );
}

export default TermsConditions;