// Selected the form and resume display elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLElement;

// Added an event listener to handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Captured the input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generated the resume HTML
    resumeContent.innerHTML = `
        <h2 class="editable" contenteditable="true" style= "text-align: center;
         line-height: 1.5;
         margin-top:6px;
        margin-bottom:6px;">${name}</h2>
        <h4 class="editable" contenteditable="true" style= "text-align: center;
        line-height: 1.5;
        margin-top:6px;
        margin-bottom:6px;">Email: ${email}</h4>
        <h4 class="editable" contenteditable="true" style= "text-align: center;
        line-height: 1.5;
        margin-top:6px;
        margin-bottom:6px;">Contact: ${contact}</h4>
        <h3 style="line-height: 1.5;
        margin-top:3px;
        margin-bottom:3px;">Education</h3>
        <p class="editable" contenteditable="true" style="line-height: 1.5;
        margin-top:3px;
        margin-bottom:3px;
       ">${education.replace(/\n/g, '<br>')}</p>
        <h3 style="line-height: 1.5;
        margin-top:3px;
        margin-bottom:3px;">Work Experience</h3>
        <p class="editable" contenteditable="true" style="line-height: 1.5;
        margin-top:3px;
        margin-bottom:3px;
       ">${workExperience.replace(/\n/g, '<br>')}</p>
        <h3 style="line-height: 1.5;
        margin-top:3px;
        margin-bottom:3px;">Skills</h3>
        <p class="editable" contenteditable="true" style="line-height: 1.5;
        margin-top:3px;
        margin-bottom:3px;
       ">${skills.replace(/\n/g, '<br>')}</p>
    `;
});

// Function to save the changes when the user edits the content
resumeContent.addEventListener('input', (event) => {
    const target = event.target as HTMLElement;
    target.setAttribute('data-edited', 'true'); 
});
