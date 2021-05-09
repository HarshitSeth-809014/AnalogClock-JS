setInterval(() => {
    d = new Date()
    hTime = d.getHours()
    mTime = d.getMinutes()
    sTime = d.getSeconds()

    hRot = 30*hTime + mTime/2
    mRot = 6*mTime
    sRot = 6*sTime

    hour.style.transform = `rotate(${hRot}deg)`
    minute.style.transform = `rotate(${mRot}deg)`
    second.style.transform = `rotate(${sRot}deg)`
}, 1000);