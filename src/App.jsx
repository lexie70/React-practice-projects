import './App.css'
import { TwitterFolloCard } from './TwitterFollowCard'
export function App(){
    return<>
    <section className='App'>
        <TwitterFolloCard name={'Elon Musk'} userName={'elonmusk'} isFollowing/>
        <TwitterFolloCard name={'Vanderhart'} userName={'vxnder'} isFollowing/>
        <TwitterFolloCard name={'Miguel Angel'} userName={'midudev'} isFollowing/>
        <TwitterFolloCard name={'Pablo'} userName={'pheralb'} isFollowing/>
    </section>
    </>
}
