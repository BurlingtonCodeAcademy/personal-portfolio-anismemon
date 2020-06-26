import React from 'react'


function About(props) {

    // variables to keep return statement cleaner (not currently being used for other languages)

    let title = 'About me'
    let para1 = "After many years in the fields of translation and language teaching, I’m shifting focus to other forms of language – man-made languages that help us communicate with the digital world. "
    let para2 = 'I’ve always loved grammar – learning rules, applying them and then discovering new ones that modify, supersede or even contradict the earlier ones. That’s how human languages work. The most interesting part of learning them is getting to the stage where there are no longer any explicit rules to help you refine your communication.'
    let para3 = 'In the short time I’ve been working with computer languages, I’ve discovered that the rules are far more absolute but the process of refining your knowledge of them, of learning other rules that do the same thing but more efficiently, is not entirely dissimilar.'
    let para4 = 'I’ve also discovered though that the feeling of satisfaction I get when I finally figure out how to “talk” to the computer is similar to the one I get when I manage to communicate a complex idea to another person in a different language. '
    let para5 = 'There’s an important difference however: once I get my code running properly, it will perform exactly the same way every time I run it, with no surprises. If I communicate an idea to another person, on the other hand, there’s a good chance something new will return to me as the communication expands.'
    let para6 = 'And that’s what is important to remember about the virtual world: it doesn’t exist as an end in itself, but as a means to further human goals, which is why we must strive not to lose sight of the human end all of our digital creations.'

    // checks language and changes content accordingly

    if (props.language === 'FR') {
        title = 'Quelques mots sur moi ...'
    }

    if (props.language === 'IT') {
        title = 'A proposito di me'
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>
            <p>{para4}</p>
            <p>{para5}</p>
            <p>{para6}</p>

        </div>
    )
}

export default About 
