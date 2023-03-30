import {useState} from "react";

function NavTab() {
    const [links, setLinks] = useState ([
        {
            text: 'Inicio',
            content: "Welcome to our page!",
            selected: false
        },
        {
            text: 'Misión y Visión',
            content: "Those are our mision and vision.",
            selected: true
        },
        {
            text: 'Sobre nosotros',
            content: "We are all workers.",
            selected: false
        },
        {
            text: 'Contacto',
            content: "Please, fell free to contact us.",
            selected: false
        },
    ])

    function linkSelection(actual_index){
        console.log('You are selecting index ' + actual_index);
        const newLinks = links.map((link,ind_link) => 
            {
                return {
                    text: link.text,
                    content: link.content,
                    selected: actual_index == ind_link
                }
            }
        )
        setLinks (newLinks)
    }

    return (
        <div className="navTab">  
            <div className="tabs" >
                {links.map( (link, index) => 
                    <button  onClick={(ev) => {linkSelection (index)}} key={link.text} 
                        className= {link.selected ? "tabItem selected" : "tabItem"}>
                        {link.text}
                    </button>
                )}
            </div>
            <div className="tabView">
                {
                    links.find(link=> link.selected === true).content
                }
            </div>
        </div>
    );
}

export default NavTab;