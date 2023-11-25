const taskLists = [];
      function listTask() {
        let result = `
        <div class="section2">
        <div>
          <div class="post_image">
            <img src="../images/man.png" />
            <p>Krushil Mehta</p>
          </div>
          <p class="profile">
            Student of web development at Humber College || Information technology solutions) <br />
            1s • 🌎
          </p>
        </div>`;
        for (i = 0; i < taskLists.length; i++) {
          result += `<p> ${taskLists[i]} </p>`;
        }
        result += `
      <p>👍1 you</p>
      <div class="comment">
            <input type="text" placeholder="add your comment.." />
            <img
              src="../images/send.png"
              height="30px"
              onclick="addcomment()"
            />
          </div>
    </div>`;
        console.log(result);
        document.getElementById("post_here").innerHTML = result;
      }
      function addTask() {
        let newtask = document.getElementById("post_text").value;
        taskLists.push(newtask);
        listTask();
      }

      

const commentLists = [];
function commentListsTask() {
    let result = `
    <div class="post_image">
    <img src="../images/man.png"/>
    <p>Krushil Mehta</p>
    </div>`;
        for (i = 0; i < commentLists.length; i++) {
          result += `<p> ${commentLists[i]} </p>`;
        }
        result += ``;
        console.log(result);
        document.getElementById("comment_here").innerHTML = result;
      }
      function addcomment() {
        let newtask = document.getElementById("post_comment").value;
        commentLists.push(newtask);
        commentListsTask();
      }
