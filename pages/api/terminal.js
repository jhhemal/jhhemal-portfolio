export default function handler(req, res) {
  // ANSI escape codes for styling
  const reset = '\x1b[0m';
  const bold = '\x1b[1m';
  const underline = '\x1b[4m';
  const green = '\x1b[32m';
  const blue = '\x1b[34m';
  const red = '\x1b[31m';
  const yellow = '\x1b[33m';

  // Header with provided ASCII art logo
  const header = `
${bold}${green}     _       _     _     _       _   _   _                       
    | | __ _| |__ (_) __| |_   _| | | | | | __ _ ___  __ _ _ __  
 _  | |/ _\` | '_ \\| |/ _\` | | | | | | |_| |/ _\` / __|/ _\` | '_ \\ 
| |_| | (_| | | | | | (_| | |_| | | |  _  | (_| \\__ \\ (_| | | | |
 \\___/ \\__,_|_| |_|_|\\__,_|\\__,_|_| |_| |_|\\__,_|___/\\__,_|_| |_|
                                                                 
 _   _                      _ 
| | | | ___ _ __ ___   __ _| |
| |_| |/ _ \\ '_ \` _ \\ / _\` | |
|  _  |  __/ | | | | | (_| | |
|_| |_|\\___|_| |_| |_\\__,_|_|
${reset}
${bold}${blue}*** Jahidul Hasan Hemal ***${reset}
${underline}${green}Data Science Enthusiast & *nix User${reset}\n\n`;

  // Introduction with professional style
  const intro = `${green}Welcome to my terminal-based personal website! Here, you will find detailed information about my professional background, projects, skills, and how to contact me.\n${reset}\n`;

  // About Me
  const aboutTitle = `${bold}${underline}${blue}-- About Me --${reset}\n`;
  const aboutContent = `${green}I am Jahidul Hasan Hemal, a passionate data scientist with a solid background in machine learning, data analysis, and Unix systems. With years of experience in the industry, I have developed a keen interest in solving complex problems and building efficient, data-driven solutions.\n\n${reset}`;

  // Skills
  const skillsTitle = `${bold}${underline}${blue}-- Skills --${reset}\n`;
  const skillsContent = `${green}
${bold}${yellow}Programming Languages:${reset} ${green}Python, R, SQL, JavaScript\n
${bold}${yellow}Frameworks:${reset} ${green}FastAPI, Django, Flask, React\n
${bold}${yellow}Data Science & Machine Learning:${reset} ${green}Pandas, NumPy, Scikit-Learn, TensorFlow, Keras\n
${bold}${yellow}Data Visualization:${reset} ${green}Matplotlib, Seaborn, Plotly\n
${bold}${yellow}Big Data Technologies:${reset} ${green}Hadoop, Spark\n
${bold}${yellow}Databases:${reset} ${green}MySQL, PostgreSQL, MongoDB\n
${bold}${yellow}Tools & Platforms:${reset} ${green}Docker, Kubernetes, Git, Jupyter, VSCode, AWS\n\n`;

  // Projects
  const projectsTitle = `${bold}${underline}${blue}-- Projects --${reset}\n`;
  const project1 = `${green}1. ${bold}Predictive Analytics Model${reset}\n${red}   Developed a machine learning model to predict future trends based on historical data, improving forecast accuracy by 20%.\n${reset}`;
  const project2 = `${green}2. ${bold}Automated Unix Scripts${reset}\n${red}   Created shell scripts to automate routine tasks, enhancing system efficiency and productivity.\n${reset}`;
  const project3 = `${green}3. ${bold}Data Visualization Dashboard${reset}\n${red}   Built an interactive dashboard using Plotly and Dash to visualize complex datasets, enabling data-driven decision-making.\n${reset}`;
  const project4 = `${green}4. ${bold}Big Data Processing Pipeline${reset}\n${red}   Designed and implemented a scalable data processing pipeline using Apache Spark, reducing data processing time by 50%.\n${reset}`;

  // Contact
  const contactTitle = `${bold}${underline}${blue}-- Contact --${reset}\n`;
  const contactContent = `${green}For collaboration or inquiries, reach out to me at:
${bold}${underline}Email:${reset} jhhemalusa@gmail.com
${bold}${underline}LinkedIn:${reset} https://linkedin.com/in/jhhemal
${bold}${underline}GitHub:${reset} https://github.com/jhhemal
${bold}${underline}Instagram:${reset} https://instagram.com/jhhemal\n\n`;

  // Footer
  const footer = `${green}Thanks for visiting my terminal-based website! Stay curious and keep learning.\n${reset}`;

  // Combine all sections
  const message = `${header}${intro}${aboutTitle}${aboutContent}${skillsTitle}${skillsContent}${projectsTitle}${project1}${project2}${project3}${project4}${contactTitle}${contactContent}${footer}`;

  res.setHeader('Content-Type', 'text/plain');
  res.send(message);
}
