import './App.css'
import { TwitterFolloCard } from './TwitterFollowCard'
export function App(){

    const handleAdd = (userName) => `@${userName}`

    return<>
    <section className='App'>
        <TwitterFolloCard  handleAdd={handleAdd} name={'Elon Musk'} userName={'elonmusk'} isFollowing/>
        <TwitterFolloCard handleAdd={handleAdd}  name={'Vanderhart'} userName={'vxnder'} isFollowing/>
        <TwitterFolloCard handleAdd={handleAdd}  name={'Miguel Angel'} userName={'midudev'} isFollowing/>
        <TwitterFolloCard handleAdd={handleAdd}  name={'Pablo Hernadez'} userName={'pheralb'} isFollowing/>
    </section>
    </>
}
