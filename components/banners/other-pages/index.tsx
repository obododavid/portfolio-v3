import styles from "./styles.module.scss";
import { Ref, RefObject } from "react";
import { ScrollAlert, Logo, SectionPlaceholder } from "../../index";
export default function Banner({
	texts,
	textWrapperRef,
	scrollIndicatorRef,
	bannerRef,
	bannerHeight,
}: {
	texts: string[];
	textWrapperRef: RefObject<HTMLDivElement>;
	scrollIndicatorRef: Ref<HTMLDivElement>;
	bannerRef: RefObject<HTMLDivElement>;
	bannerHeight?: number;
}) {
	return (
		<>
			<div className={styles.banner} ref={bannerRef} style={{ minHeight: bannerHeight + "px" }}>
				<Logo color="#000" propStyles={styles.logo} />
				<div ref={textWrapperRef} className={styles.textWrapper}>
					<div className={styles.firstPair}>
						{texts.slice(0, 2).map((item, i) => {
							return (
								<h1 key={i}>
									<span className={styles.lineWrapper}>
										{item.split("").map((letter, i) => {
											return (
												<span className={styles.letterWrapper} key={i}>
													<span className={styles.letter} data-key="letter">
														{letter}
													</span>
												</span>
											);
										})}
										{i % 2 !== 0 && <span className={styles.bg} data-key="bg"></span>}
									</span>
								</h1>
							);
						})}
					</div>
					<div className={styles.secondPair}>
						{texts.slice(2, 4).map((item, i) => {
							return (
								<h1 key={i}>
									<span className={styles.lineWrapper}>
										{item.split("").map((letter, i) => {
											return (
												<span className={styles.letterWrapper} key={i}>
													<span className={styles.letter} data-key="letter">
														{letter}
													</span>
												</span>
											);
										})}
										{i % 2 !== 0 && <span className={styles.bg} data-key="bg"></span>}
									</span>
								</h1>
							);
						})}
					</div>
				</div>
				<ScrollAlert containerRef={scrollIndicatorRef} propStyles={styles.bottom} />
			</div>
			<SectionPlaceholder styles={{ height: bannerHeight ? bannerHeight + "px" : "100vh" }} />
		</>
	);
}
