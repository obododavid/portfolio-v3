import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { FaintBgText } from "../../../../index";
import { Ref } from "react";

export type WorkMobileProps = {
    mobileWorkDetailsContainerRef: Ref<HTMLDivElement>;
    mobileWorkTitlesContainerRef: Ref<HTMLUListElement>;
    mobileWorkContainerRef: Ref<HTMLDivElement>;
    mobileWorkContentWrapperRef: Ref<HTMLDivElement>;
};
export default function ViewMobile({
    mobileWorkDetailsContainerRef,
    mobileWorkTitlesContainerRef,
    mobileWorkContainerRef,
    mobileWorkContentWrapperRef
}: WorkMobileProps) {
    return (
        <div className={styles.container} ref={mobileWorkContainerRef} id="work-section">
            <div className={styles.contentWrapper} ref={mobileWorkContentWrapperRef}>
                <div className={styles.tabs}>
                    <div className={styles.bgGradient}></div>
                    <ul className={styles.tabHeaders} ref={mobileWorkTitlesContainerRef}>
                        {WORK.map((item, i) => {
                            return (
                                <li className={styles.tabHeader} key={i}>
                                    {item.company.includes("Upwork") ? "Upwork" : item.company}
                                </li>
                            );
                        })}
                    </ul>

                    <div className={styles.tabDetails} ref={mobileWorkDetailsContainerRef}>
                        {WORK.map((item, i) => {
                            const { title, location, range, url, note, urlLabel } = item;
                            return (
                                <div className={styles.tabDetail} key={i}>
                                    <section>
                                        <div className={styles.notes} dangerouslySetInnerHTML={{ __html: note }} />

                                        <span>{range}</span>

                                        <ul>
                                            <li> {title}</li>

                                            {location && <li> {location}</li>}
                                            <li>
                                                <a href={url} target="_blank" rel="noreferrer">
                                                    {urlLabel ? urlLabel : url}
                                                </a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <FaintBgText
                    text="work"
                    containerStyles={{ width: "68vw", right: "0px", bottom: "0%" }}
                    svgStyles={{ height: "30vw" }}
                    textStyles={{ fontSize: "30vw" }}
                />
            </div>
        </div>
    );
}