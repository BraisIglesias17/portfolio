

export interface Command{
    title:string;
    description:string;
}

export enum CommandIntro {
    GetStudies='get studies',
    GetExperience='get experience',
    GetPositions='get positions',
    GetOrgs='get companies',
    GetCurrentOrg='get current company',
    GetGrades='get grades',
    GetTechnologies='get tech skills',
    GetInterests='get interests',
    GetHobbies='get hobbies',
    GetHelp='get help'
}

export const CommandDescription: Command[]=[

    {
        title:CommandIntro.GetStudies,
        description:" Retreive all the major studies that Brais has accomplished"
    },
    {
        title:CommandIntro.GetExperience,
        description:" Retreive all the professional experience that Brais has had"
    },
    {
        title:CommandIntro.GetPositions,
        description:"Get the previous postitions Brais has worked on"
    },
    {
        title:CommandIntro.GetOrgs,
        description:" Get the companies or organizations for which Brais has worked"
    },
    {
        title:CommandIntro.GetInterests,
        description:" Display the fields in which Brais shows more interest"
    },
    {
        title:CommandIntro.GetTechnologies,
        description:" Display all the skills Brais has, both in terms of code languages, frameworks, paradigms ..."
    },
    {
        title:CommandIntro.GetGrades,
        description:" Display the grades of Brais both in Master's and Bachelor's degree"
    },
    {
        title:CommandIntro.GetHobbies,
        description:" Display Brais's hobbies."
    }
]

export const Commands: Record<string,string>={
    [CommandIntro.GetStudies.replace(/\s/g, "")]:" Brais has studied in University of Vigo\n both Bachelor's degree and Master's degree in <b>software engineering</b><br> Add -l option to the command to get more info",
    [CommandIntro.GetExperience.replace(/\s/g, "")]:" He has experience as software developer, mainly frontend and as research engineer.",
    [CommandIntro.GetPositions.replace(/\s/g, "")]:" Software engineer (frontend and mobile app) and Research engineer (data science and ML)",
    [CommandIntro.GetOrgs.replace(/\s/g, "")]:" Brais has worked for: University of Vigo, NTT DATA and ODEENE Ingeniería",
    [CommandIntro.GetCurrentOrg.replace(/\s/g, "")]:' Brais is currently working for: <b>ODEENE INGENIERIA</b>',
    [CommandIntro.GetGrades.replace(/\s/g, "")]:"The average was <b>8.7</b> in Bachelor's degree and 9.2 in Master's degree",
    [CommandIntro.GetHelp.replace(/\s/g, "")]:getHelpCommand(),
    [CommandIntro.GetTechnologies.replace(/\s/g, "")]: 'Brais has both theorical and practical (with some of them professional and others only academical) experience with the following technologies:<br>'+
                                                        '<br>-------------------------------------------------------------------------'+
                                                        '<br><b>Coding languages:</b> Java, Javascript, C++, C#, Typescript, python and R'+
                                                        '<br><b>System administration:</b> Linux, Ansible, Docker, Kuberentes'+
                                                        '<br><b>AI and data sciente:</b> Machine learning with python and R'+
                                                        '<br><b>Network managment and security</b>'+
                                                        '<br><b>Cloud</b>: Azure, AWS and Google Cloud'+
                                                        '<br>-------------------------------------------------------------------------',

    [CommandIntro.GetHobbies.replace(/\s/g, "")]:' He likes to code but also to play football, padel tennis and all kind of sports. He also loves cinema.',
    [CommandIntro.GetInterests.replace(/\s/g, "")]:' He is especially interested on Cloud and devOps field, in technologies such as Terraform, Kubernetes ....'
}

export const ExtendedCommands: Record<string,string>={
    [CommandIntro.GetStudies.replace(/\s/g, "")]:" <br>- September 2018 - May 2022 : Bachelor's degree in Software engineering (8.7 average grade and honoured in 10 subjects)"+
                                                  " <br>- September 2022 - February 2024 : Master's degree in Software engineering (9.2 average grade and honoured in 4 subjects)"+
                                                  " <br>- Certified B2, C1 and C2 English Level"   ,
    [CommandIntro.GetExperience.replace(/\s/g, "")]:" Brais has worked for:\n \t - University of Vigo (jun.2022-may.2023)\n\t - NTT DATA(internship) (feb.2022-may.2022) \n\t -  ODEENE Ingeniería (nov.2023-current)",
    [CommandIntro.GetPositions.replace(/\s/g, "")]:" <b>Intern software engineer (Feb.2022-May.2022):</b> during my internship at NTT DATA I have learned several technologies and work procress that helped my to apply my formation knowledge to the real world.<br> I have worked on FRONT-END and BACK-END, getting contact with common used technologies such as Spring (Security,Boot...) and React.<br> However, the acquisition that I highlight the most from this period is the knowledge and adaptation to Xamarin, which is a .NET framework used to develop mobile applications for IOs and Android."+
                                                    " <br><br><b>Research engineer (Jun.2022-May.2023):</b> during my time as an investigator for University of Vigo I worked mainly on the project COPERIA. Our aim was to apply machine learning technologies to physiological measures in order to be able to diagnose long COVID.<br> To be more precise, I worked analyzing heart variability (HRV) features and building models with them as input. I also took part on papers regarding HRV and stress detection.<br> This job helped me to improve both my data analysis skills and overall knowledge regarding data processing, artificial intelligence and the investigation field."+
                                                    " <br><br><b>Software engineer (Nov.2023-<i>current</i>):</b> software production, design and maintenance for bank industry ",
    [CommandIntro.GetOrgs.replace(/\s/g, "")]:"Brais's career timeline: <br>"+
                                               " -> February 2022 - May 2022 (Internship) Technology Consulting NTT DATA (while completing Bachelor's degree)<br>"+
                                               " -> June 2022 - May 2023 (full time Research Project) University of Vigo (while completing Master's degree)<br>"+
                                               " -> November 2023 - <i>current</i> (full time junior Software Engineer) Technology Consulting Odeene (while completing Master's degree during 3 first months)<br>",
    [CommandIntro.GetCurrentOrg.replace(/\s/g, "")]:' Brais is currently working on the tech consulting company <b>Odeene</b> as a software engineer. Working mainly for banking industry.',
    [CommandIntro.GetGrades.replace(/\s/g, "")]:'',
}



function getHelpCommand(): string{
    var toret='Command list\n<br>';
    CommandDescription.forEach((command: Command)=>{
        toret+=`<b>${command.title}<b> - ${command.description} <br>\n`
    })

    toret+='<br><br><b>Note:</b> By adding the parameter -l to most commands additional information will be retreived<br><br>\n'
    return toret;
}