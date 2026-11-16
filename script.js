
const careers = {
    technology: {
        title: "Software Developer",
        description: "Design, develop and maintain software applications.",
        skills: ["Java", "Python", "JavaScript", "Problem Solving"],
        alternatives: ["Web Developer", "Software Engineer", "IT Analyst"]
    },
    business: {
        title: "Business Analyst",
        description: "Analyze business problems and help organizations make better decisions.",
        skills: ["Business Knowledge", "Communication", "Data Analysis"],
        alternatives: ["Business Manager", "Project Manager", "Entrepreneur"]
    },
    design: {
        title: "UI/UX Designer",
        description: "Create attractive and user-friendly digital experiences.",
        skills: ["Creativity", "Figma", "Graphic Design", "User Research"],
        alternatives: ["Graphic Designer", "Web Designer", "Product Designer"]
    },
    science: {
        title: "Data Scientist",
        description: "Use data and analytical methods to discover useful information.",
        skills: ["Python", "Statistics", "Mathematics", "Data Analysis"],
        alternatives: ["Data Analyst", "Research Scientist", "AI Specialist"]
    },
    communication: {
        title: "Digital Marketing Specialist",
        description: "Help businesses grow through online marketing and communication.",
        skills: ["Communication", "Creativity", "Marketing", "Social Media"],
        alternatives: ["Content Creator", "PR Specialist", "Marketing Manager"]
    },
    health: {
        title: "Healthcare Professional",
        description: "Support people's health and wellbeing through healthcare services.",
        skills: ["Communication", "Science", "Teamwork", "Critical Thinking"],
        alternatives: ["Medical Laboratory Technologist", "Healthcare Administrator", "Public Health Officer"]
    }
};

document.getElementById("careerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const education = document.getElementById("education").value;
    const interest = document.getElementById("interest").value;
    const skill = document.getElementById("skill").value;
    const work = document.getElementById("work").value;

    if (!name || !education || !interest || !skill || !work) {
        alert("Please complete all fields.");
        return;
    }

    const career = careers[interest];

    let extraCareer = "";

    if (skill === "programming" && interest !== "technology") {
        extraCareer = "You may also explore Software Development.";
    } else if (skill === "creativity" && interest !== "design") {
        extraCareer = "You may also explore Creative Design.";
    } else if (skill === "analysis" && interest !== "science") {
        extraCareer = "You may also explore Data Analysis.";
    } else if (skill === "leadership") {
        extraCareer = "You may also explore Project Management.";
    } else if (skill === "communication" && interest !== "communication") {
        extraCareer = "You may also explore Communication-related careers.";
    }

    const result = document.getElementById("result");

    result.innerHTML = `
        <h3>Hello, ${name}!</h3>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Working Style:</strong> ${work}</p>

        <h3>Your Recommended Career</h3>
        <h2>${career.title}</h2>

        <p>${career.description}</p>

        <h3>Recommended Skills to Develop</h3>
        <ul>
            ${career.skills.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3>Other Career Options</h3>
        <ul>
            ${career.alternatives.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <p><strong>Additional Suggestion:</strong> ${extraCareer || "Continue developing your skills and exploring different career opportunities."}</p>

        <p><strong>Note:</strong> This is a basic rule-based recommendation, not a professional career assessment.</p>
    `;

    result.style.display = "block";
    result.scrollIntoView({ behavior: "smooth" });
});
