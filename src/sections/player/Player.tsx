import { forwardRef, useContext } from "react";
import Background from "../../assets/images/section-1.jpg";
import styles from "./Players.module.scss";
import { AiFillBackward, AiFillForward, AiFillCaretRight, AiOutlinePause } from "react-icons/ai";
import { AudioContext } from "../../contexts/audioContext";
import { Scrubber } from "../../components/scrubber/Scrubber";
import { TimeCurrent } from "../../components/timeCurrent/TimeCurrent";
import { TimeDuration } from "../../components/timeDuration/TimeDuration";
import { Thumbnail } from "../../components/thumbnail/Thumbnail";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export const Player = forwardRef((props: {}, ref: React.LegacyRef<HTMLElement> | undefined) => {
    const audioContext = useContext(AudioContext);

    const playAudioHandler = () => {
        !audioContext.isPlaying ? audioContext.play() : audioContext.pause();
    };

    const nextAudioHandler = () => {
        audioContext.next();
        audioContext.setProgressHandler(0);
    };

    const previousAudioHandler = () => {
        audioContext.previous();
        audioContext.setProgressHandler(0);
    };

    return (
        <section
            ref={ref as React.RefObject<HTMLDivElement>}
            className="bg-img bg-fade-top pt-36 pb-20"
            style={{ backgroundImage: `url('${Background}')` }}
        >
            <Parallax speed={30}>
                <motion.div
                    className="self-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className={`${styles["player-container"]} container`}>
                        <div
                            className={`${styles["player"]} mx-auto text-center pt-28 pb-16 lg:pt-32 lg:pb-20`}
                        >
                            <div
                                className={`${styles["player-bg"]} bg-cover	bg-no-repeat bg-center blur`}
                                style={{
                                    backgroundImage: `url(${
                                        audioContext.currentAudio.metadata.artworkUrl ?? ""
                                    })`,
                                }}
                            ></div>
                            <div className="relative z-10">
                                <div className={`${styles["player-thumb"]} mb-5`}>
                                    <Thumbnail />
                                </div>
                                <div className="text-white text-light">
                                    <h3 className="font-bold lg:text-xl">
                                        {audioContext.currentAudio.metadata.title}
                                    </h3>
                                    <span className="block tracking-widest">
                                        {audioContext.currentAudio.metadata.released?.getFullYear()}
                                    </span>
                                </div>
                                <div className="py-10 lg:py-12 mx-8 lg:mx-12 text-white">
                                    <div
                                        className={`${styles["audio-controls"]} flex justify-between mb-7`}
                                    >
                                        <button onClick={previousAudioHandler}>
                                            <AiFillBackward />
                                        </button>
                                        <button onClick={playAudioHandler}>
                                            {audioContext.isPlaying ? (
                                                <AiOutlinePause />
                                            ) : (
                                                <AiFillCaretRight />
                                            )}
                                        </button>
                                        <button onClick={nextAudioHandler}>
                                            <AiFillForward />
                                        </button>
                                    </div>
                                    <Scrubber className="mb-2" />
                                    <div className="flex justify-between">
                                        <TimeCurrent />
                                        <TimeDuration />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Parallax>
        </section>
    );
});
