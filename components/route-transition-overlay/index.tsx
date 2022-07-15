import styles from "./styles.module.scss";
import { Ref, useRef } from "react";
import { useRouter } from "next/router";
import { Logo } from "#/components";

export default function Routetransition({
    layersWrapperRef,
    loadingTextsRef
}: {
    layersWrapperRef: Ref<HTMLDivElement>;
    loadingTextsRef: Ref<HTMLDivElement>;
}) {
    const router = useRouter();
    const texts = useRef(["Loading...", `It's coming...`, "Easy there tiger...", "Just some slow network..."]).current;

    return (
        <div className={styles.container}>
            <Logo
                variant="initials"
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "1001"
                }}
            />
            <div className={styles.textWrapper} ref={loadingTextsRef}>
                {texts.map((item, i) => {
                    return (
                        <div>
                            <span key={i}>{item}</span>
                        </div>
                    );
                })}
            </div>
            <div className={styles.layers} ref={layersWrapperRef}>
                <div className={styles.layer} data-key="layer"></div>
                <div className={styles.layer} data-key="layer"></div>
            </div>
        </div>
    );
}
