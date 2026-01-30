import { Github, Linkedin, Terminal, Database, Mail } from 'lucide-react'

export const PERSONAL_INFO = {
  name: 'Samonwita Sarker',
  email: 'sarker.samonwita@gmail.com',
  github: 'https://github.com/SamisDone',
  linkedin: 'https://www.linkedin.com/in/samonwita-sarker-a87737262/',
  codeforces: 'https://codeforces.com/profile/jinxed_sam',
  kaggle: 'https://www.kaggle.com/samonwitasarker',
  location: 'Bangladesh',
}

export const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`

export const SOCIAL_LINKS = [
  { 
    icon: Mail, 
    href: GMAIL_URL, 
    label: 'Email', 
    username: 'sarker.samonwita' 
  },
  { 
    icon: Github, 
    href: PERSONAL_INFO.github, 
    label: 'GitHub', 
    username: '@SamisDone' 
  },
  { 
    icon: Linkedin, 
    href: PERSONAL_INFO.linkedin, 
    label: 'LinkedIn', 
    username: 'samonwita-sarker' 
  },
  { 
    icon: Terminal, 
    href: PERSONAL_INFO.codeforces, 
    label: 'Codeforces', 
    username: 'jinxed_sam' 
  },
  { 
    icon: Database, 
    href: PERSONAL_INFO.kaggle, 
    label: 'Kaggle', 
    username: 'samonwitasarker' 
  },
]
