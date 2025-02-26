const navbar = `<nav>
		<h1><a class="navButton" href="/index.html">Home</a><a class="navButton" href="/projects.html">Projects</a><a class="navButton" href="/about.html">About</a><a class="navButton" href="
			#Contact">Contact</a></h1>
	</nav>`;

const contact = `<div class = "contentStatic">
			<h2 style="padding-top:3%">Contact</h2>
			<h3 style="padding-bottom:0.5%;padding-top:0.5%;font-size:120%;">
				Email: <a href="mailto:vincentw3007:gmail.com" style="text-decoration: none; color:skyblue">vincentw3007@gmail.com</a>
			</h3>
			<div>
				<a class = "icons" href="https://github.com/wjf37">
					<img src="/images/github-brands-solid.svg" alt="GitHub Logo">
				</a>
				<a class = "icons" href="https://www.linkedin.com/in/vincent-wong-7aa367320/">
					<img src="/images/linkedin-brands-solid.svg" alt="LinkedIn Logo">
				</a>
				<a class = "icons" href="https://wjf37.itch.io/">
					<img src="/images/itch-io-brands-solid.svg" alt="itch.io logo">
				</a>
			</div>
		</div>`;
export function insertNavbar() {
    document.getElementById("navbar").innerHTML = navbar;
}
export function insertContact() {
	document.getElementById("Contact").innerHTML = contact;
}