const View=require('../models/view');
 

exports.getView=(req,res,next)=>{
    const dataId=req.body.dataId;
    View.findOne({dataId:dataId})
        .then((view)=>{ res.json(view); })
        .catch(err => res.status(400).json('Error: ' + err));
}



exports.postView=(req,res,next)=>{
    // const dataId=mongoose.Types.ObjectId(req.body.dataId);
    const dataId=req.body.dataId;
    const urlImage=req.body.urlImage;
    const bb_sectionBox_min=req.body.bb_sectionBox_min;
    const bb_sectionBox_max=req.body.bb_sectionBox_max;
    const eyePosition=req.body.eyePosition;
    const forwardDirection=req.body.forwardDirection;
    const upDirection=req.body.upDirection;
    const view = new View({
        dataId,urlImage,bb_sectionBox_min,bb_sectionBox_max,
        eyePosition,forwardDirection,upDirection
    })
    view.save()
    .then(() => res.json(view))
    .catch(err => res.status(400).json('Error: ' + err));
}
exports.updateView= (req,res,next)=>{
    const dataId = req.body.dataId;
    const urlImage=req.body.urlImage;
    const bb_sectionBox_min=req.body.bb_sectionBox_min;
    const bb_sectionBox_max=req.body.bb_sectionBox_max;
    const eyePosition=req.body.eyePosition;
    const forwardDirection=req.body.forwardDirection;
    const upDirection=req.body.upDirection;
     View.findOneAndUpdate({dataId:dataId},{ $set: {
                                    urlImage: urlImage,
                                    bb_sectionBox_min: bb_sectionBox_min,
                                    bb_sectionBox_max: bb_sectionBox_max,   
                                    eyePosition: eyePosition,
                                    forwardDirection: forwardDirection,
                                    upDirection:upDirection  }},{new:true,upsert:true}
                                    ).then((view) => res.json(view));
                  
     

}

