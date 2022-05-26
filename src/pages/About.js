import pic1 from "../static/books_about.jpg";

export const About = () => {
    return (
        <div className='container text-center'>
            <img src={pic1} alt="Mrs. Who's Library" />
            <h1>About Mrs. Who's Library</h1>
            <p>The book covers all aspects of life. It is with us from before we can go to the last chapter. It makes us sharper in our work, and ensures the relaxation of our vacation. 
                Books can take us back in time, forward in time, slow us down and make our hearts beat faster.
                The book stimulates us mentally. Strengthens our memory. Increases our ability to concentrate and empathize with other people. 
                Reduces our stress and blood pressure. The book provides insight and makes us listen inward. Several of us have even experienced that a single book has changed our lives. 
                 <b><i> Sometimes one book can change the course of history.</i></b> Never before have you been able to experience the book so easily in so many ways. You can flip through the book's crackling pages and swipe your way through a crime story.
                 If you want to listen, you can have the book read by the author himself.</p>
        </div>
    )
}