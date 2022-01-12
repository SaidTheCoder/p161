AFRAME.registerComponent("bowl",{

    init:function(){
        this.rollBall();
    },

    rollBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                var bullet=document.createElement("a-entity")
                bullet.setAttribute("geometry",{primitive:"sphere",radius:.09})
                bullet.setAttribute("material","color","yellow")

                var cam = document.querySelector("#camera")
                pos=cam.getAttribute("position")
                bullet.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
                var camera=document.querySelector("#camera").object3D
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)
                bullet.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene=document.querySelector("#scene")
                scene.appendChild(bullet)
            }
        })
    }
})