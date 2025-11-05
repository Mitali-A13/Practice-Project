//WHY NEED IT ? Normally har async route mein try-catch likhna padta hai, 
//Ek baar wrapper bana lo, phir har route mein reuse karo

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err));
    }
}

export {asyncHandler};