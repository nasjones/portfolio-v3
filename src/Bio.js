import BioPic from "./img/coffee.jpeg";
import "./Bio.css";

export default function Bio() {
	return (
		<section className="sectionInfo">
			<div className="bioWrap">
				<img src={BioPic} id="bioPic" />
				<p>
					I was born and raised in Long Island New York. From as far back as I
					can remember I have always been in front of a computer screen trying
					to figure out how to tweak something online (Shouts out to Myspace) or
					find a way to solve a problem. I love programming because it is the
					perfect cross between logic and expression! If you want to know
					anything else feel free to{" "}
					<a href="mailto:nassircjones@gmail.com">email me here!</a> I also love
					gaming keep going to see what I've been playing.
				</p>
			</div>
		</section>
	);
}
