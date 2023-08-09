
export function TwitterFolloCard({name,userName, isFollowing}){
     console.log(isFollowing);
     const addAt=(userName)=> `@${userName}`
     
    return (
        <article>
            <header>
                <img src={`https://unavatar.io/${userName}`} alt="imagen usando avatar"/>
                <div>
                    <strong>{name}</strong>
                    <span>{addAt(userName)}</span>
                </div>
            </header>
            
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
        )
            
    }
