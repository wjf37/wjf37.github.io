export function insertNavbar() {
    document.getElementById("navbar").innerHTML = `<nav>
		<h1><a class="navButton" href="/index.html">Home</a><a class="navButton" href="/projects.html">Projects</a><a class="navButton" href="/about.html">About</a><a class="navButton" href="
			#Contact">Contact</a></h1>
	</nav>`;
}

export function insertContact() {
	document.getElementById("Contact").innerHTML = `<div class = "contentStatic">
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
}

//load projects from projects.json. pass featured param
export async function loadProjects(featured) {
	try {
		const response = await fetch("/projects/projects.json");
		if (!response.ok) {
			throw new Error(response.status);
		}

		const container = document.querySelector(".container");
		if (!container) {
			console.error("Container element not found.");
			return;
		}

		let data = await response.json();
		let htmlContent = "";

		data.forEach(project => {
			if (!featured || (featured && project.featured)) {
				htmlContent += `
				<a href="${project.link}" alt="${project.linkAlt}">
					<div class = "gridItem" data-categories = "${project.categories}">
						<div class = "image">
							<img src = "${project.image}" alt = "${project.imgAlt}">
							<div class = "overlay">
								<p>${project.description}</p>
							</div>
						</div>
						
						<div class = "content">
							<h3>${project.title}</h3>
						</div>
					</div>
				</a>`;
			}
		})
		container.innerHTML += htmlContent;
	}

	catch (error) {
		console.error("Error fetching projects: ", error);
	}
}