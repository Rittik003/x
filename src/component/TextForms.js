import React, {useState} from 'react'
export default function TextForms(props) {
    const[text,setText]=useState("");
    const handleUpClick=()=>{
               let newText=text.toUpperCase();
               setText(newText);
               props.showAlert("Converted to Lower Case","success");
           }
    const handleLoClick=()=>{
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lower Case","success");
  }
    const handleClrClick=()=>{
            let newText='';
            setText(newText);
            props.showAlert("Cleared","danger");
}
    const handleCopy=()=>{
            var text=document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to clipboard","success");
  }
    const handleExtraSpaces=()=>{
            let newText= text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed","success");
  }
    const handleOnChange=(event)=>{
                console.log("On change");
                setText(event.target.value);
            }
return (
        <>
        <div className= "container" style={{ color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to UpperCase</button>
         <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to LowerCase</button>
         <button className="btn btn-primary mx-1"onClick={handleClrClick}>Clear Text</button>
         <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3"style={{ color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary </h2>
            <p>{text.length===0? 0:(text.split(" ").length)-1} Words {text.length} Characters </p>
            <p>{0.08*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Enter to preview"}</p>
        </div>
        </>
        
    )
}
//  {/* import React,{useState} from 'react'

//  export default function TextForms(props) { */}
//      {/* const handleUpClick=()=>{ */}
// {/* //         //console.log("UpperCase was clicked"+text);
//         let newText=text.toUpperCase();
//         setText(newText);
//         props.showAlert("Converted to Upper Case","success");
//     }
//     const handleLoClick=()=>{
//       let newText=text.toLowerCase();
//       setText(newText);
//       props.showAlert("Converted to Lower Case","success");
//   }
//     const handleClrClick=()=>{
//     let newText='';
//     setText(newText);
//     props.showAlert("Cleared","danger");
// }
//     const handleOnChange=(event)=>{
//         console.log("On change");
//         setText(event.target.value);
//     }
//     const handleCopy=()=>{
//       var text=document.getElementById("exampleFormControlTextarea1");
//       text.select();
//       navigator.clipboard.writeText(text.value);
//       props.showAlert("Copied to clipboard","success");
//   }
//     const handleExtraSpaces=()=>{
//       let newText= text.split(/[ ]+/);
//       setText(newText.join(" "));
//       props.showAlert("Extra spaces removed","success");
//   }
//     const[text,setText]=useState("");
//   return (
//     <>
//     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
//     <h1>{props.heading}</h1>
//     <div className="mb-3">
//     <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
//     </div>
//     <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to UpperCase</button>
//     <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to LowerCase</button>
//     <button className="btn btn-primary mx-1"onClick={handleClrClick}>Clear Text</button>
//     <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
//     <button className="btn btn-primary mx-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//     </div>
//     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
//       <h2>Your text summary </h2>
//       <p>{text.length===0? 0:(text.split(" ").length)-1} Words {text.length} Characters </p>
//       <p>{0.08*text.split(" ").length} minutes to read</p>
//       <h2>Preview</h2>
//       <p>{text.length>0? text : "Enter to preview"}</p>
//     </div>
//     </>
//   )
// } */}
