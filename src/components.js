import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Users from './users';
import Posts from './object';
import './App.css';




function PostBtn(){
    return(
        <a href="#allcards"><button  type=" button" className=" heading butn">Posts</button></a>
    )
}
function UserBtn(){
    return(
        <a href="#allusers"><button  type=" button" className=" heading butn">Users</button></a>
    )
}
function Cards() {
    return (
        <div>   
        
            <h3 className="heading">Users List</h3>
            <div className="allcards" id="allusers">
                {
                    Users.map((i) => {
                        return (
                            <div className="card user">
                                <img height="300" width="200" src="https://i1.wp.com/growmetachem.com/wp-content/uploads/2020/09/Business-Male-Icon-Vector-User-Icon-Avatar-PNG-and-Vector-with-Transparent-Background-for-Free-Download.jpg?ssl=1" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h2 className=" heading card-title">{i.id}) {i.name}</h2>
                                    <h4 className="card-text">UserName: {i.username}</h4>
                                    <h5 className=" card-text">Email.{i.email}</h5>
                                    Visit: <a href={i.website} className="card-text">{i.website}</a> <p className="card-text">Contact us {i.phone}</p>
                                </div>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
function Post() {
    return (
        <div className="q3">
            <h2 className="heading">Q3:</h2>
            <h3 className="heading">Posts</h3>
            <div className="allcards" id="allcards">
                {
                    Posts.map((i) => {
                        return (
                            <div class="card">
                                <h5 class="card-header">Post no.{i.id}</h5>
                                <div class="card-body">
                                    <h5 class="card-title">Title: {i.title}</h5>
                                    <p class="card-text">details: {i.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


function Question(){
   return(
    <div className="q3">
    <h2 className="heading">Q3:</h2>
            <div className="allbtns">
            <PostBtn></PostBtn>
            <UserBtn></UserBtn> 
            </div>
            <Post/>
            <Cards/> 

    </div>
   ) 
}
export default Question;
