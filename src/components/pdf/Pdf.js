import React from 'react';
import jspdf from 'jspdf';
import r1 from '../../images/r1.jpg';
import r2 from '../../images/r2.jpg';

const Pdf = () => {
  const pdfgenerate=()=>{
    var doc=new jspdf("portrait","px","a4","false")
    doc.addImage(r1,'PNG',65,20,500,400)
    doc.addPage()
    doc.addImage(r2,'PNG',65,20,500,400)
    // doc.text(60,60,'Name')
    // doc.text(60,80,'Email')
    // doc.text(60,100,'Phone')
    // doc.text(100,60,'Name')
    // doc.text(100,60,'Name')
    // doc.text(100,60,'Name')
    doc.save("Rahul.pdf")
  }
  return (
    <div><button className='btn btn-sm btn-outline-info m-3 py-2' onClick={()=>pdfgenerate()}>Download resume <i class="fas fa-download"/></button></div>
  )
}

export default Pdf;