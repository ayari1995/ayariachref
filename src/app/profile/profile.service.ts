import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: 'AZ-104: Microsoft Azure Administrator',
      desc: '',
      credentialId: '85EFA91244-2D0FBEF5974D-85E40AFB7C',
      date: 'Apr 2023',
      logo: 'assets/images/kodekloud.png',
      link: 'https://kodekloud.com/certificate-verification/85EFA91244-2D0FBEF5974D-85E40AFB7C/',
      imgUrl: 'assets/images/z1.png',
      company: 'KodeKloud'
    },

    {
      id: 2,
      title: 'Docker Certified Associate Exam Course',
      desc: '',
      credentialId: '85EFA91244-85E9B37EFC-85E40AFB7C',
      date: 'Apr 2023',
      logo: 'assets/images/kodekloud.png',
      link: 'https://kodekloud.com/certificate-verification/85EFA91244-85E9B37EFC-85E40AFB7C/',
      imgUrl: 'assets/images/z26.png',
      company: 'KodeKloud'
    },


    {
      id: 3,
      title: 'Graph Developer - Associate',
      desc: '',
      credentialId: '00c218f3-4c6a-407e-aae0-4454125dc146',
      date: 'Apr 2023',
      logo: 'assets/images/apollo.jpeg',
      link: 'https://www.apollographql.com/tutorials/certifications/00c218f3-4c6a-407e-aae0-4454125dc146',
      imgUrl: 'assets/images/z27.png',
      company: 'Apollo GraphQL'
    },

    {
      id: 4,
      title: 'Elastic Stack',
      desc: '',
      credentialId: '59435',
      date: 'Mar 2023',
      logo: 'assets/images/greatLearning.jpeg',
      link: 'https://olympus.mygreatlearning.com/courses/59435/certificate',
      imgUrl: 'assets/images/z23.png',
      company: 'Great Learning'
    },


    {
      id: 5,
      title: 'Agile Scrum Foundation',
      desc: '',
      credentialId: '4077455',
      date: 'Jan 2023',
      logo: 'assets/images/simpleLearn.jpeg',
      link: 'https://certificates.simplicdn.net/share/4077455_1673259453.pdf',
      imgUrl: 'assets/images/z4.png',
      company: 'Simplilearn'
    },



    {
      id: 6,
      title: 'Project Management Essentials Certification',
      desc: '',
      credentialId: '302846709',
      date: 'Jan 2023',
      logo: 'assets/images/institute.jpeg',
      link: 'https://drive.google.com/file/d/1oGrshjLgxW2QVwz-YgdekFVXUBSTg_x3/view?usp=sharing',
      imgUrl: 'assets/images/z24.png',
      company: 'Management & Strategy Institute'
    },



    {
      id: 7,
      title: 'Angular (Advanced)',
      desc: '',
      credentialId: '610525',
      date: 'Dec 2022',
      logo: 'assets/images/study.jpeg',
      link: 'https://drive.google.com/file/d/1HbQbCOh8hJ2ua9MkkVt6DukDFyzxNs0b/view?usp=sharing',
      imgUrl: 'assets/images/z21.png',
      company: 'StudySection'
    },



    {
      id: 8,
      title: 'Angular for Advanced Level',
      desc: '',
      credentialId: '40969',
      date: 'Dec 2022',
      logo: 'assets/images/greatLearning.jpeg',
      link: 'https://olympus.mygreatlearning.com/courses/40969/certificate',
      imgUrl: 'assets/images/z23.png',
      company: 'Great Learning'
    },


    {
      id: 9,
      title: 'Git Tutorial',
      desc: '',
      credentialId: '65405',
      date: 'Dec 2022',
      logo: 'assets/images/greatLearning.jpeg',
      link: 'https://olympus.mygreatlearning.com/courses/65405/certificate',
      imgUrl: 'assets/images/z23.png',
      company: 'Great Learning'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      credentialId: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      date: 'Apr 2023',
      logo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      link: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      company: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      credentialId: 'https://personal-portfolio0320.000webhostapp.com/',
      date: 'Apr 2023',
      logo: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      link: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      company: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      credentialId: 'https://personal-portfolio0320.000webhostapp.com/',
      date: 'Apr 2023',
      logo: 'https://github.com/mehulk05/My-Personal-Portfolio',
      link: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      company: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      credentialId: 'https://mehulkothari05.medium.com/',
      date: 'Apr 2023',
      logo: 'https://github.com/mehulk05',
      link: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      company: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      credentialId: 'https://mehulkothari05.medium.com/',
      date: 'Apr 2023',
      logo: 'https://github.com/mehulk05/Matrimonial-Website.git',
      link: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      company: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `FULLSTCK SOFTWARE DEVELOPER with 3.5+ years of experience .
  Worked with Software Development Life Cycle and  agile methodologies .
  Expertise in Angular, Spring Boot, Javascrip and UI with Responsive Designs .
  Have good understanding of DevOps, Java, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL , MONOGO , POSTGRES',
      'progress': '75%' 
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'SPRING BOOT,JAVA',
      'progress': '80%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2017 - 2019',
      'education': 'Master\'s Degree',
      'stream': 'Telecommunication System & Networks',
      'institution': 'Faculty of Mathematical, Physical and Natural Sciences of Tunis',
      'imgUrl': 'assets/images/FSTLOGO.png',

      'info': `The program is designed to address the industry's demand for expertise in network engineering and
      web-based information system management.
      The program focuses on preparing graduates to meet the needs of businesses in these thriving fields,
      providing ample opportunities for professional growth and employment.`,
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2017',
      'education': 'Bachelor\'s Degree',
      'stream': 'Electronics, Electrical Engineering & Automation (EEA)',
      'institution': 'Faculty of Mathematical, Physical and Natural Sciences of Tunis',
      'imgUrl': 'assets/images/FSTLOGO.png',
      'info': `The program focuses on understanding, designing, and maintaining various electronic systems used in
      industry.It covers technologies for electrical energy production and distribution, microelectronics, programming,
      communication techniques, and encourages entrepreneurship.`
    },
    {
      'id': '3',
      'from_to_year': '2013 - 2014',
      'education': 'Secondary  School',
      'imgUrl': '',
      'stream': 'Technical Sciences',
      'institution': 'High School',
      'info': `A national diploma essential for admission to university.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'SOFTParadigm',
      location: 'Fulltime',
      timeline: 'mar 2023 to Present',
      role: 'FULLSTCK SOFTWARE DEVELOPER',
      work: 'Design and development of an inspection checklist application that allows users to create checklists, submit reports, and conduct inspections.The solution is intended for a broad range of industries that require safety audits and inspections.',
      imgUrl: 'assets/images/logo-SOFTParadigm.png',

    },
    {
      id: 3,
      company: 'AFNOR International IT Engineering',
      location: 'Fulltime',
      timeline: 'Feb 2020 - mar 2023 3 years & 1 month',
      role: 'Full-Stack Web Developer',
      imgUrl: 'assets/images/AFNOR.jpeg',

      work: `Technologies : Angular , Java Spring Boot , SQL .

      Design and development of an integrated operational functioning tool, CPM "Customer Production
      Management," that aids in decision-making, tracks organizational activities, and provides an overall
      view of the customer relationship with monitoring of each dedicated action.
      
      Design and development of a Dynamic Integrated Management Solution for Enterprise Management Systems
      in the automotive sector based on the requirements of the IATF 16949 standard and its updates.`
    },

    {
      id: 1,
      company: 'Technology Assistance Service T.A.S',
      location: 'Internship',
      timeline: 'Feb 2019 - Sep 2019 · 8 months',
      role: 'Full-Stack Web Developer Trainee',
      imgUrl: 'assets/images/TAS.png',

      work: `Technologies : Angular , Java Spring Boot , SQL .

      Design and develop a commercial web application.

      Analyze documentation for a Cloud-supported Integrated Management Software.
  
      Prepare the services and entities needed to establish a connection with Enterprise Resources Planning. `
    },


  ]

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Achref Ayari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id: 1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id: 1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
