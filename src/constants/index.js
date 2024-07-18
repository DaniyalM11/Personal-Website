import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Enstar_Group,
    Verisk_Analytics,
    AIG,
    Stevens,
    Temple,
    AWS,
    Spark,
    Postgres,
    GCP,
    Kubernetes,
    MsAccess,
    MsExcel,
    MsVisio,
    MsPP,
    MsWord,
    MsSqlServer,
    Oracle,
    Python,
    Pytorch,
    reactjs2,
    SKLearn,
    TF,
    Azure,
    Github,
    TChat,
    NMT,
    ABNB,
    ABNBV2,
    Port_Web,
    everestglobal_logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "email:muftid124@gmail.com",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Engineer",
      icon: creator,
    },   
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "ML Engineer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "TF",
      icon: TF,
    },
    {
      name: "Pytorch",
      icon: Pytorch,
    },
    {
      name: "SKLearn",
      icon: SKLearn,
    },
    {
      name: "Spark",
      icon: Spark,
    },
    {
      name: "Azure",
      icon: Azure,
    },
    {
      name: "GCP",
      icon: GCP,
    },
    {
      name: "AWS",
      icon: AWS,
    },
    {
      name: "Postgres",
      icon: Postgres,
    },
    {
      name: "Oracle",
      icon: Oracle,
    },
    {
      name: "MsSqlServer",
      icon: MsSqlServer,
    },
    {
      name: "MsAcces",
      icon: MsAccess,
    },
    {
      name: "MsExcel",
      icon: MsExcel,
    },
    {
      name: "MsWord",
      icon: MsWord,
    },
    {
      name: "MsVisio",
      icon: MsVisio,
    },
    {
      name: "MsPP",
      icon: MsPP,
    },
    
    {
      name: "React",
      icon: reactjs2,
    },
    
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: Github,
    },

    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: Kubernetes,
    },
    
  ];
  
  const experiences = [
    {
      title: "Director - Data Engineering",
      company_name: "Everest",
      icon: Verisk_Analytics,
      iconBg: "#E6DEDD",
      date: "January 2024 - Present",
      points: [
        "Team Lead for 3 teams with staff totaling 5-15 people at various times. Platform split into North America Insurance, International Insurance and Reinsurance team.",
        "North America Insurance platform built on Azure datalake technology using Data lakehouse medallion architecture. Databricks Notebooks, PySpark, Spark SQL, Azure Data Factory Pipelines and Tidal Job Scheduling tool use to build Data lakehouse based system. International Insurance and Reinsurance systems built using Azure SQL PAAS instances, stored procedures, SQL, Azure Data Factory Pipelines and Tidal Job Scheduling tool; staging layer/propagation layer/mart layer star schema based dimensional model used.",
        "Gross Reserve Studies(GRS), Actual Vs Expected(AVE), Incurred but not reported(IBNR), Roll Forward tool(RFT), Solvency II(Solv) modules built as part of data application.",
        "Scheduled jobs built to interface with third part reserving tool called ResQ. PowerBI used for report building and dashboarding purposes. Automated jobs being setup to interface with ledger for IBNR booking purposes.",
        "Working in a SAFe(Scaled Agile Framework) setting using Software Development Life Cycle(SDLC)."
      ],
    },    
    {
      title: "Senior Data Analyst II - Actuarial",
      company_name: "Enstar Group",
      icon: Enstar_Group,
      iconBg: "#383E56",
      date: "December 2019 - January 2024",
      points: [
        "Performed data analysis, data engineering, machine learning for the non-life runoff US corporate actuarial department. Extensive use of Python, SQL, and MS Office toolset.",
        "Assisting actuaries with portfolio specific data management and workflow automations.",
        "Building a data warehouse using star schema dimensional modeling for the US actuarial team with the front end serving proposed to be piloted using Power BI/Access Linked Tables/ResQ/Jupyter Notebooks. Project code named - Project ADAM. Azure cloud services Fabric and Synapse are being explored to implement a distributed warehouse to accommodate large datasets. Demoed PowerBI as a tool to build group level reports and dashboard.",
        "Assisting the change initiative within organization and with group wide data initiatives as a data steward.",
        "Building an end-to-end Machine Learning project to discover feature importance for claim settlements amounts for asbestos claims. Scikit Learn & Keras are being used for model building, testing and inference. MLFlow proposed to be used for MLOPS."
      ],
    },
    {
      title: "Senior Business Data Analyst",
      company_name: "Verisk Analytics",
      icon: Verisk_Analytics,
      iconBg: "#E6DEDD",
      date: "December 2016 - December 2019",
      points: [
        "Built bespoke transformation engines for PDP's clients using various technologies. Extensive use of Python, PostgreSQL and MS Office toolset for data engineering and data analysis.",
        "Maintained and developed subject matter expertise of ISO's statistical commercial lines and personal lines manuals to aid PDP's client needs.",
        "Helped develop internal ISO and external vendor processes to aid each PDP client's project development.",
        "Worked in an agile product development environment using the JIRA project management tool. Worked on certain projects as a project owner writing stories containing business requirements and pseudo code for overseas development team to develop.",
      ],
    },
    {
      title: "Actuarial Analyst/Senior Actuarial Assistant/Actuarial Assistant",
      company_name: "AIG",
      icon: AIG,
      iconBg: "#383E56",
      date: "October 2006 - May 2015",
      points: [
        "9 years of loss reserve predictive modeling, data engineering, data analysis & data management experience. 6 years of supervisory experience with 3 years of direct management experience. Extensive use of MS office toolset,VBA and Oracle SQL.",
        "Lead analyst for financial lines, small business solutions and warranty lines of business predictive modeling reserve analyses on varying occasions. Lead analyst for Hong Kong, Jamaica, UK, Malaysia and Latin America regional reserve analyses on varying occasions. Lead analyst for various statutory entity predictive modeling  reserve analyses on varying occasions.",
        "Led, performed and supervised the AIG international quarter close process. Process involved booking IBNR reserves on a US GAAP and Local STAT basis for all countries and every line of business AIG operates in, where held totaled numerous billions in IBNR reserves. Process also involved continuous communications with regional actuaries, senior management, regional accountants and profit centers heads. Maintained SOX complainer documentation for process.",
        "Enhanced and maintained star schema based dimensional data model built in MS Access to maintain machine data for IBNR reserve booking process during quarter close. The system was also used to balance to ledger postings and reserving totals that were populated in the reserving templates. Enhanced and maintained vba based data pipelines to move data from data model into quarterly IBNR booking analysis templates, balancing templates and reserve study templates. Maintained quarterly SOX compliance documentation for system. In later years, the system began to be moved onto Oracle from MS Access.",
      ],
    },

  ];

  const education = [
    {
      title: "Stevens Institute of Technology - Shaefer School of Engineering and Science",
      degree: "Master of Science",
      major: "Major - Machine Learning",
      icon: Stevens,
      iconBg: "#383E56",
      date: "January 2020 - August 2022",
      points: [

      ],
    },
    {
      title: "Temple University - Fox School of Business",
      degree: "Bachelor of Business Administration ",
      major: "Major - Actuarial Science",
      icon: Temple,
      iconBg: "#E6DEDD",
      date: "January 2003 - August 2006",
      points: [

      ],
    },
  ]; 
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Transformer Chatbot",
      description:
        "A chatbot built using Transformer architecture using the Daily Dialogue dataset. TensorFlow was used as the library of choice to train the model. ",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "orange-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: TChat,
      source_code_link: "https://github.com/DaniyalM11/Natural-Language-Processing-Projects/tree/main/Transformer%20Chatbot",
    },
    {
      name: "Neural Machine Translation",
      description:
        "Sequence to sequence Bidirectional LSTM achitecture and a english to pig latin dataset provided by course instructor were used to train a character level neural machine translation model. TensorFLow was used as the library of choice.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "orange-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: NMT,
      source_code_link: "https://github.com/DaniyalM11/Natural-Language-Processing-Projects/tree/main/Neural%20Machine%20Translation%20-%20English%20to%20Pig%20Latin",
    },
    {
      name: "AirBNB 2019 Statistical Analysis",
      description:
        "A statistical analysis was conducted using AirBNB's 2019 data found on Kaggle. EDA and Geo-spatial Analysis was done followed by hypothesis testing. This led to multiple linear regression models being run and an adjusted r-squared measure was used to determine the goodness of fit of each model. R was used as the tool of analysis. ",
      tags: [
        {
          name: "EDA",
          color: "blue-text-gradient",
        },
        {
          name: "HypothesisTesting",
          color: "orange-text-gradient",
        },
        {
          name: "R",
          color: "pink-text-gradient",
        },
      ],
      image: ABNBV2,
      source_code_link: "https://github.com/DaniyalM11/Machine-Learning-Projects/tree/main/FE%20541%20Final%20Project%20Daniyal%20Mufti%20-%20New%20York%20City%20Airbnb%202019%20Statistical%20Analysis",
    },
    {
      name: "Portfolio Website",
      description:
        "A website showcasing a portfolio of my personal projects. ReactJS, Tailwind and threeJS were all used to build website.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "orange-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: Port_Web,
      source_code_link: "https://github.com/DaniyalM11/Personal-Website",
    },
  ];
  
  export { services, technologies, experiences, education, testimonials, projects };