import "./App.css";
import { TwitterFolloCard } from "./TwitterFollowCard";
export function App() {
  return (
    <>
      <section className="App">
        <TwitterFolloCard userName={"elonmusk"} >
            Elon Musk
        </TwitterFolloCard>

        <TwitterFolloCard userName={"vxnder"} >
            Vanderhart
        </TwitterFolloCard>

    
        <TwitterFolloCard userName={"midudev"} >
            Miguel Angel
        </TwitterFolloCard>

        <TwitterFolloCard userName={"pheralb"} >
            Pablo Hernadez
        </TwitterFolloCard>
      </section>
    </>
  );
}
