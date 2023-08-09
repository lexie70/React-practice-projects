
export function TwitterFolloCard({name,userName, isFollowing}){
    const imageScr= `https://unavatar.io/${userName}`
    return (
        <article>
            <header>
                <img src={imageScr} alt="imagen usando avatar"/>
                <div>
                    <strong>{name}</strong>
                    <span>{userName}</span>
                </div>
            </header>
            
            <aside>
                <button>
                    {isFollowing}
                </button>
            </aside>
        </article>
        )
            
    }
