import { useState } from "react";
export function TwitterFolloCard({ userName, children }){
    const [isFollowing,setIsFollowing]= useState(false)

     const text= isFollowing ? "siguiendo" : "seguir"
     const clases = isFollowing ? "isfollowing" : "notfollowing"

     const handleClick = () => { 
        setIsFollowing(!isFollowing);
        console.log(isFollowing);
    }
     
    return (
        <article>
            <header>
                <img src={`https://unavatar.io/${userName}`} alt="imagen usando avatar"/>
                <div>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            
            <aside >
                <button className={clases} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
        )
            
    }
