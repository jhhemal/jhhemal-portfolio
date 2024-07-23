import { NextResponse } from 'next/server';

export function middleware(req) {
  const userAgent = req.headers.get('user-agent') || '';

  if (userAgent.includes('curl') || userAgent.includes('wget')) {
    // ANSI escape codes for styling
    const reset = '\x1b[0m';
    const bold = '\x1b[1m';
    const underline = '\x1b[4m';
    const green = '\x1b[32m';
    const blue = '\x1b[34m';
    const red = '\x1b[31m';

    // Header with provided ASCII art logo
    const header = `
${bold}${green}   _ _     _                          _ 
  (_) |__ | |__   ___ _ __ ___   __ _| |
  | | '_ \\| '_ \\ / _ \\ '_ \` _ \\ / _\` | |
  | | | | | | | |  __/ | | | | | (_| | |
 _/ |_| |_|_| |_|\___|_| |_| |_|\__,_|_|
|__/                                    
${reset}
${bold}${blue}*** Jahidul Hasan Hemal ***${reset}
${underline}${green}Data Science Enthusiast & *nix User${reset}\n\n`;

    // Introduction with hacking screen style
    const intro = `${green}Welcome to my personal terminal! Here you will find information about my work, projects, and interests in data science and Unix-based systems.\n${reset}\n`;

    // About Me
    const aboutTitle = `${bold}${underline}${blue}-- About Me --${reset}\n`;
    const aboutContent = `${green}I am a passionate data scientist with a strong interest in machine learning, data analysis, and Unix systems. I enjoy exploring new technologies and solving complex problems.\n\n${reset}`;

    // Projects
    const projectsTitle = `${bold}${underline}${blue}-- Projects --${reset}\n`;
    const project1 = `${green}1. ${bold}Predictive Analytics Model${reset}\n${red}   Developed a machine learning model to predict future trends based on historical data.\n${reset}`;
    const project2 = `${green}2. ${bold}Automated Unix Scripts${reset}\n${red}   Created shell scripts to automate routine tasks, enhancing system efficiency and productivity.\n${reset}`;

    // Contact
    const contactTitle = `${bold}${underline}${blue}-- Contact --${reset}\n`;
    const contactContent = `${green}For collaboration or inquiries, reach out to me at ${bold}${underline}hemal@example.com${reset}.\n\n`;

    // Footer
    const footer = `${green}Thanks for visiting my text-based website! Stay curious and keep learning.\n${reset}`;

    // Combine all sections
    const message = `${header}${intro}${aboutTitle}${aboutContent}${projectsTitle}${project1}${project2}${contactTitle}${contactContent}${footer}`;

    // Return plain text response
    return new Response(message, {
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return NextResponse.next();
}
