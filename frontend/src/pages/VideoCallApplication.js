import { useHuddleStore } from "@huddle01/huddle01-client/store";
import MediaElement from "../components/mediaElement";
import MeVidElem from "../components/meVidElem";
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'
import React, { useEffect } from 'react';

const VideoCallApplication = ({ huddleClient }) => {
  const { address, connector, isConnected } = useAccount();
  // const { data: ensName } = useEnsName({ address })
  const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
  const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);
  const roomState = useHuddleStore((state) => state.roomState);
  const recordingState = useHuddleStore((state) => state.recordingState);
  const recordings = useHuddleStore((state) => state.recordings);

  useEffect(() => {
    console.log(address);
    console.log(connector)
  }, [])

  // const startHuddle = () => {
  //   huddleClient.join('board-room');
  // };

  const startHuddle = async () => {
    try {
      await huddleClient.join("dev", {
        address,
        wallet: "",
        ens: "",
      });

      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="flex flex-col align-middle justify-center gap-10 relative bg-on-primary-high-emphasis w-full overflow-hidden text-left text-5xl text-on-primary-high-emphasis font-h5">
      <div className="flex flex-row gap-4 float-right w-[50%]">
        <a href="/agreement">Contract Agreement</a>
        <a href="/contracts">Contracts</a>
        <a href="/marketplace">Marketplace</a>
          <a href="/terms-conditions">Terms and Conditions</a>
          <a href="/walkthrough">Site Walkthrough</a>
      </div>
      <div className="left-[40px] shadow-[0px_8px_32px_rgba(35,_36,_39,_0.2),_0px_16px_80px_rgba(29,_30,_32,_0.4)] w-[1360px] h-[960px] overflow-hidden flex flex-row items-start justify-start">
        <div className="relative bg-black w-80 h-[960px] shrink-0 overflow-hidden">
          <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-80 h-[960px] flex flex-col items-start justify-start">
            <div className="self-stretch hidden flex-row py-3 px-4 items-center justify-between">
              <img
                className="relative w-10 h-10 shrink-0 object-cover hidden"
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="../remixiconslinecommunicationchatnewline.svg"
                />
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="../remixiconslinesystemmore2line.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col pt-3 px-4 pb-6 items-start justify-start">
              <div className="self-stretch rounded-lg bg-whitesmoke-200 flex flex-row py-2 px-3 items-center justify-start">
                <a href="/">
                  <img
                    className="relative rounded-2xxs w-[242px] h-[69px] shrink-0 object-cover"
                    alt=""
                    src="../blue-gradient-header-banner-1-1@2x.png"
                  /></a>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-whitesmoke-200" />
            <div className="self-stretch overflow-hidden hidden flex-col p-6 items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[32px]">
                Stories
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px] text-base font-caption-2">
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story.svg"
                />
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story1.svg"
                />
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story2.svg"
                />
                <div className="relative w-12 h-12 shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../user.svg"
                  />
                  <div className="absolute top-[29.17%] left-[35.42%] leading-[20px]">
                    😊
                  </div>
                </div>
                <div className="relative w-12 h-12 shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../user1.svg"
                  />
                  <div className="absolute top-[29.17%] left-[35.42%] leading-[20px]">
                    🥑
                  </div>
                </div>
                <img className="relative w-12 h-12 shrink-0" alt="" />
              </div>
            </div>
            <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-whitesmoke-200" />
            <div className="self-stretch flex flex-row py-3 px-6 items-start justify-start text-black">
              <div className="relative leading-[32px]">Messages</div>
            </div>
            <div className="self-stretch flex-1 bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start text-xl">
              <div className="self-stretch bg-whitesmoke-200 flex flex-row py-3 px-6 items-center justify-start gap-[8px] text-black">
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story3.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Stakeholder 1
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      17:33
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-base leading-[20px] font-caption-2">
                    Makes to a illustrated on all and...
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row py-3 px-6 items-center justify-start gap-[8px] text-black">
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story4.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Stakeholder 2
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      16:42
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-base font-caption-2">
                    <div className="flex-1 relative leading-[20px]">
                      Hey, I heard that you wanted...
                    </div>
                    <div className="relative w-4 h-4 shrink-0 text-xs text-text-dark-primary">
                      <img
                        className="absolute top-[0px] left-[0px] w-4 h-4"
                        alt=""
                        src="../ellipse-2.svg"
                      />
                      <div className="absolute top-[1px] left-[5px] leading-[14px]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row py-3 px-6 items-center justify-start gap-[8px]">
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story5.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Jenny Wilson
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      14:32
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-base leading-[20px] font-caption-2">
                    For sure! Let’s hangout on Sund...
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row py-3 px-6 items-center justify-start gap-[8px]">
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story6.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Aaron Zimmer
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      Yesterday
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-base font-caption-2">
                    <img
                      className="relative w-4 h-4 shrink-0 overflow-hidden"
                      alt=""
                      src="../remixiconslinesystemcheckdoubleline.svg"
                    />
                    <div className="flex-1 relative leading-[20px]">
                      No 😅 I just went to bed right...
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row py-3 px-6 items-center justify-start gap-[8px] text-base font-caption-2">
                <div className="relative w-12 h-12 shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../user.svg"
                  />
                  <div className="absolute top-[29.17%] left-[35.42%] leading-[20px]">
                    😊
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start text-xl font-h5">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Annette Black
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      Wednesday
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-base font-caption-2">
                    <div className="flex-1 relative leading-[20px]">
                      Ooooh thank you so much! ❤️
                    </div>
                    <div className="relative w-4 h-4 shrink-0 text-xs text-text-dark-primary">
                      <img
                        className="absolute top-[0px] left-[0px] w-4 h-4"
                        alt=""
                        src="../ellipse-2.svg"
                      />
                      <div className="absolute top-[1px] left-[5px] leading-[14px]">
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row py-3 px-6 items-center justify-start gap-[8px]">
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story7.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Jane Cooper
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      Wednesday
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-base leading-[20px] font-caption-2">
                    But I’m not really sure how it is...
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row py-3 px-6 items-center justify-start gap-[8px] text-base font-caption-2">
                <div className="relative w-12 h-12 shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../user3.svg"
                  />
                  <div className="absolute top-[29.17%] left-[35.42%] leading-[20px]">
                    👅
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start text-xl font-h5">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Anna Newman
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      Wednesday
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px] text-base font-caption-2">
                    <img
                      className="relative w-4 h-4 shrink-0 overflow-hidden"
                      alt=""
                      src="../remixiconslinesystemcheckdoubleline1.svg"
                    />
                    <div className="flex-1 relative leading-[20px]">
                      Best day ever 😂😂
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row py-3 px-6 items-center justify-start gap-[8px]">
                <img
                  className="relative w-12 h-12 shrink-0"
                  alt=""
                  src="../user-story8.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Dianne Russell
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      Tuesday
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-base leading-[20px] font-caption-2">
                    No problem! See you then.
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-row py-3 px-6 items-center justify-start gap-[8px] text-base font-caption-2">
                <div className="relative w-12 h-12 shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../user4.svg"
                  />
                  <div className="absolute top-[29.17%] left-[35.42%] leading-[20px]">
                    🌱
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start text-xl font-h5">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Bessie Cooper
                    </div>
                    <div className="relative text-sm leading-[18px] font-caption-2">
                      Monday
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-base leading-[20px] font-caption-2">{`lorem ipsum dolor `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[-320px] bg-whitesmoke-200 w-80 h-[960px] flex flex-col items-start justify-start text-xl">
            <div className="self-stretch flex flex-row py-5 px-6 items-start justify-start gap-[8px] text-whitesmoke-200">
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                Profile
              </div>
            </div>
            <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-whitesmoke-200" />
            <div className="self-stretch h-80 shrink-0 flex flex-col p-6 box-border items-center justify-end gap-[16px] opacity-[0] text-center">
              <img
                className="relative w-[124px] h-[124px] shrink-0 object-cover"
                alt=""
                src="../ellipse-11@2x.png"
              />
              <div className="self-stretch flex flex-col items-center justify-end">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Sarah Joy
                </div>
                <div className="self-stretch relative text-base leading-[20px] font-caption-2">
                  +49 172 862045
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px shrink-0 opacity-[0] border-t-[1px] border-solid border-whitesmoke-200" />
            <div className="self-stretch flex flex-col p-6 items-center justify-end opacity-[0] text-base font-caption-2">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[20px]">Info</div>
                <div className="self-stretch flex flex-row items-start justify-start text-xl font-h5">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Dreaming 😊
                  </div>
                  <img
                    className="relative w-4 h-4 shrink-0 overflow-hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px shrink-0 opacity-[0] border-t-[1px] border-solid border-whitesmoke-200" />
            <div className="self-stretch flex flex-col p-6 items-center justify-end opacity-[0] text-base font-caption-2">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[20px]">Name</div>
                <div className="self-stretch flex flex-row items-start justify-start text-xl font-h5">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Sarah Joy
                  </div>
                  <img
                    className="relative w-4 h-4 shrink-0 overflow-hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px shrink-0 opacity-[0] border-t-[1px] border-solid border-whitesmoke-200" />
          </div>
        </div>
        <div className="self-stretch relative bg-darkgray w-px shrink-0" />
        <div className="self-stretch relative bg-darkgray w-px shrink-0" />
        <div className="self-stretch flex-1 flex flex-col items-start justify-start text-3xl">
          <div className="self-stretch bg-whitesmoke-200 flex flex-row py-3 px-6 items-center justify-between text-black">
            <div className="flex-1 relative leading-[24px] font-semibold">
              NFT Contract Agreement
            </div>
            <img
              className="relative rounded-small w-[45px] h-[45px] shrink-0 object-cover"
              alt=""
              src="../image-1@2x.png"
            />
          </div>
          <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-darkgray" />
          <div className="self-stretch flex-1 bg-whitesmoke-200 flex flex-col p-6 items-start justify-start gap-[16px] text-base font-caption-2">
            <div className="self-stretch relative text-sm leading-[18px] text-center">
              Yesterday
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] text-gray-300">
              <div className="w-[556px] flex flex-row items-start justify-start">
                <img
                  className="relative w-[19.4px] h-4 shrink-0"
                  alt=""
                  src="../polygon-1.svg"
                />
                <div className="flex-1 rounded-tl-none rounded-tr rounded-b bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="flex-1 relative leading-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse nec turpis malesuada, pellentesque lorem nec,
                    suscipit urna. Cras blandit accumsan laoreet. Cras vitae
                    diam hendrerit, pharetra ante non, maximus arcu. Integer sit
                    amet lectus non turpis elementum pharetra. Mauris posuere
                    fringilla ullamcorper.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row py-0 pr-0 pl-6 items-start justify-start text-sm text-on-primary-high-emphasis">
                <div className="relative leading-[18px]">17:57</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-text-dark-primary">
              <div className="w-[556px] flex flex-row items-start justify-end">
                <div className="rounded-tl rounded-tr-none rounded-b bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="relative leading-[20px]">
                    Maecenas consequat dignissim metus
                  </div>
                </div>
                <img
                  className="relative w-[19.4px] h-4 shrink-0"
                  alt=""
                  src="../polygon-11.svg"
                />
              </div>
              <div className="w-[556px] flex flex-row items-start justify-start">
                <div className="flex-1 rounded-tl rounded-tr-none rounded-b bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="flex-1 relative leading-[20px]">
                    Are hazardous sight rolled subordinates what his average
                    many, to the feel among scent cleaning and behavioural
                    written 😊
                  </div>
                </div>
                <img
                  className="relative w-[19.4px] h-4 shrink-0"
                  alt=""
                  src="../polygon-11.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-0 px-6 items-start justify-end text-sm text-on-primary-high-emphasis">
                <div className="relative leading-[18px]">18:49</div>
              </div>
            </div>
            <div className="self-stretch relative text-sm leading-[18px] text-center">
              Today
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] text-black">
              <div className="w-[556px] flex flex-row items-start justify-start">
                <img
                  className="relative w-[19.4px] h-4 shrink-0"
                  alt=""
                  src="../polygon-1.svg"
                />
                <div className="flex-1 rounded-tl-none rounded-tr rounded-b bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="flex-1 relative leading-[20px]">
                    gilded the go so might that mail odd they after recently
                    than be around times, by on when that a than game, not gods,
                    at great service, semantics, now, interaction way. Her
                    whenever a long be go the this while able would desires.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row py-0 pr-0 pl-6 items-start justify-start text-sm text-on-primary-high-emphasis">
                <div className="relative leading-[18px]">15:24</div>
              </div>
              <div className="w-[556px] flex flex-row items-start justify-start">
                <img className="relative w-4 h-6 shrink-0 opacity-[0]" alt="" />
                <div className="flex-1 rounded bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="flex-1 relative leading-[20px]">
                    Vivamus rhoncus neque quis odio tincidunt blandit.Vivamus
                    rhoncus neque quis odio tincidunt blandit.
                  </div>
                </div>
              </div>
              <div className="w-[556px] flex flex-row items-start justify-start">
                <img className="relative w-4 h-6 shrink-0 opacity-[0]" alt="" />
                <div className="rounded bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="relative leading-[20px]">
                    What rational you a least, hand.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row py-0 pr-0 pl-6 items-start justify-start text-sm text-on-primary-high-emphasis">
                <div className="relative leading-[18px]">15:28</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-text-dark-primary">
              <div className="w-[556px] flex flex-row items-start justify-start">
                <div className="flex-1 rounded-tl rounded-tr-none rounded-b bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="flex-1 relative leading-[20px]">
                    Vestibulum porttitor porttitor sem in interdum. Nam
                    efficitur quis odio sed efficitur. Nunc elementum odio nisi,
                    at laoreet leo congue ut. Donec suscipit at massa at
                    vehicula.
                  </div>
                </div>
                <img
                  className="relative w-[19.4px] h-4 shrink-0"
                  alt=""
                  src="../polygon-11.svg"
                />
              </div>
              <div className="w-[556px] flex flex-row items-start justify-start">
                <div className="flex-1 rounded-tl rounded-tr-none rounded-b bg-on-primary-high-emphasis flex flex-row p-2 items-start justify-start">
                  <div className="flex-1 relative leading-[20px]">
                    Vestibulum porttitor porttitor sem in interdum. Nam
                    efficitur quis odio sed efficitur. Nunc elementum odio nisi,
                    at laoreet leo congue ut. Donec suscipit at massa at
                    vehicula.
                  </div>
                </div>
                <img
                  className="relative w-[19.4px] h-4 shrink-0"
                  alt=""
                  src="../polygon-11.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-0 px-6 items-start justify-end text-sm text-on-primary-high-emphasis">
                <div className="relative leading-[18px]">16:52</div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-darkgray" />
          <div className="relative w-[758px] h-16 shrink-0 overflow-hidden text-xl">
            <div className="absolute top-[0px] left-[0px] bg-ui-dark-01 w-[758px] flex flex-row py-3 px-6 box-border items-center justify-end gap-[10px]">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="../remixiconslinesystemdeletebin7line.svg"
                />
                <div className="relative leading-[24px]">00:00</div>
              </div>
              <div className="relative rounded [background:linear-gradient(-90deg,_rgba(255,_255,_255,_0.2),_rgba(0,_0,_0,_0))] w-[414px] h-10 shrink-0 overflow-hidden">
                <div className="absolute top-[0px] left-[398px] h-10 flex flex-row py-0 px-4 box-border items-center justify-start gap-[2px]">
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[9px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[13px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[11px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-2 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[23px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[27px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[21px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[23px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-4 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[19px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[13px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-2 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-2 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-4 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[27px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[19px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[17px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[9px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[9px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[13px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[11px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-2 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[23px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[27px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[21px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[23px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-4 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[19px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[13px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-2 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-2 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-4 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[27px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[19px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[17px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-3 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-[9px] shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                  <div className="relative rounded-md bg-silver w-0.5 h-1.5 shrink-0" />
                </div>
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="../remixiconslinemediapausecircleline.svg"
              />
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="../remixiconslinebusinesssendplane2line.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-[758px] flex flex-row py-3 px-6 box-border items-center justify-start gap-[10px] text-base font-caption-2">
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="../remixiconslineuseremotionhappyline.svg"
              />
              <img
                className="relative rounded-2xxs w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="../remixiconslineeditorattachment2.svg"
              />
              <div className="self-stretch flex-1 rounded-lg bg-on-primary-high-emphasis flex flex-row py-2 px-3 items-center justify-start gap-[8px]">
                <div className="flex-1 relative leading-[20px]">
                  Write a message
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden opacity-[0]"
                  alt=""
                />
              </div>
              <img
                className="relative w-6 h-6 shrink-0 overflow-hidden"
                alt=""
                src="../remixiconslinemediamicline.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch bg-on-primary-high-emphasis w-[280px] shrink-0 flex flex-col items-start justify-start text-xl text-black">
          <div className="self-stretch flex flex-row py-5 px-6 items-start justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../remixiconslinesystemcloseline.svg"
            />
            <div className="flex-1 relative leading-[24px] font-semibold">
              Contact info
            </div>
          </div>
          <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-darkgray" />
          <div className="self-stretch flex flex-col p-6 items-center justify-start gap-[16px] text-center">
            <img
              className="relative w-[124px] h-[124px] shrink-0 object-cover"
              alt=""
              src="../ellipse-12@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Stakeholder 1
              </div>
              <div className="self-stretch relative text-base leading-[20px] font-caption-2">
                0x2527c6028127b4c5102f5eaDbD90EEBD3CB9967D
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px shrink-0 border-t-[1px] border-solid border-darkgray" />
          <div className="self-stretch flex flex-col p-6 items-center justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Info
              </div>
              <div className="relative text-base leading-[20px] font-caption-2">
                NFT Project Contract Agreement
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col p-6 items-center justify-start text-5xl font-noto-sans">
            <div className="relative w-[162px] h-[157px] shrink-0">
              <div className="absolute top-[103px] left-[0px] w-[162px] h-[54px]">
                <div className="btn btn-info" onClick={() => { startHuddle(); }}>
                  Video Call
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[30.68px] rounded-small w-[92px] h-[93px] object-cover"
                alt=""
                src="../image-11@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 pr-0 pl-10 items-start justify-start">
            <div className="self-stretch relative leading-[24px] font-semibold">
              Make Video Calls with Stakeholders on Huddle Plaform for a
              Seamless Experience
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="card flex flex-row gap-4">
          <button className="btn btn-primary-outline" onClick={startHuddle}>Join Room</button>
          <button className="btn btn-primary-outline" onClick={() => huddleClient.enableWebcam()}>
            Enable Webcam
          </button>
          <button className="btn btn-primary-outline" onClick={() => huddleClient.disableWebcam()}>
            Disable Webcam
          </button>
          <button className="btn btn-primary-outline" onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}>
            allow All Lobby Peers To Join Room
          </button>
          <button className="btn btn-primary-outline"
            onClick={() =>
              // will not work in localhost
              huddleClient.startRecording({
                sourceUrl: window.location.href,
              })
            }
          >
            Start Recording
          </button>
          <button className="btn btn-primary-outline" onClick={() => huddleClient.stopRecording({ ipfs: true })}>
            Stop Recording
          </button>
        </div>

        <MeVidElem />

        {lobbyPeers[0] && <h2>Lobby Peers</h2>}
        <div>
          {lobbyPeers.map((peer) => (
            <div>{peer.peerId}</div>
          ))}
        </div>

        {peersKeys[0] && <h2>Peers</h2>}

        <div className="peers-grid">
          {peersKeys.map((key) => (
            <MediaElement key={`peerId-${key}`} peerIdAtIndex={key} />
          ))}
        </div>
        <div className="text-blue">
          <h2>Recording State</h2>
          <h3>inProgress: {recordingState.inProgress.toString()}</h3>
          <h3>processing: {recordingState.processing.toString()}</h3>
          <h3>started: {recordingState.started.toString()}</h3>
          <h3>recordings: {JSON.stringify(recordings)}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCallApplication;
