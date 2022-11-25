import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    }

    // const [btntext, setBtnText] = useState("Enable dark mode")
   
//    const toggleStyle = ()=>{
//         if(myStyle.color === 'black'){
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black',
//                 border: '1px solid white'
//             })
//             setBtnText("Enable light mode")
            
//             }
//             else{
//                 setMyStyle({
//                     color: 'black',
//                     backgroundColor: 'white'
//                 })
//                 setBtnText("Enable dark mode")
//         }
        
//     }

  return (
        <div className="conatiner p-3" style = {myStyle}>
            <h1 className= "my-3">About us</h1>
            <div className="accordion" id="accordionExample" style = {myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Techysquad</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate nobis est, magni earum dolores quis delectus voluptates dicta corporis reiciendis consequuntur deleniti voluptas facilis ex quisquam fugiat excepturi nostrum?</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Clodlabs Axis</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle} >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minus est fugiat quia qui rem, iure accusantium quae nemo asperiores! Sed delectus, neque iure ab aut dignissimos saepe dicta cum.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <strong>7 Span</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam temporibus reiciendis minima ipsum reprehenderit earum eveniet adipisci nihil illum cumque ducimus consequuntur harum nemo, accusamus provident, deleniti eum! Ducimus, illo?</p>
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="conatiner my-3">
            <button onClick = {toggleStyle} type = "button" className = "btn btn-primary"> {btntext}</button>
            </div> */}
            
        </div>
  )
}

