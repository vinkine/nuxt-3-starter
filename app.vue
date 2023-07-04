<script>
import axios from 'axios'

export default {
  data() {
    return {
      
      newTodo: '',
      seen:true,
      ans:[],
      todoid:0,
      todos: [
      {id:0,text: "You regularly make new friends."},
{id:1,text: "You spend a lot of your free time exploring various random topics that pique your interest."},
{id:2,text: "Seeing other people cry can easily make you feel like you want to cry too."},
{id:3,text: "You often make a backup plan for a backup plan."},
{id:4,text: "You usually stay calm, even under a lot of pressure."},
{id:5,text: "At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know."},
{id:6,text: "You prefer to completely finish one project before starting another."},
{id:7,text: "You are very sentimental."},
{id:8,text: "You like to use organizing tools like schedules and lists."},
{id:9,text: "Even a small mistake can cause you to doubt your overall abilities and knowledge."},
{id:10,text: "You feel comfortable just walking up to someone you find interesting and striking up a conversation."},
{id:11,text: "You are not too interested in discussing various interpretations and analyses of creative works."},
{id:12,text: "You are more inclined to follow your head than your heart."},
{id:13,text: "You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine."},
{id:14,text: "You rarely worry about whether you make a good impression on people you meet."},
{id:15,text: "You enjoy participating in group activities."},
{id:16,text: "You like books and movies that make you come up with your own interpretation of the ending."},
{id:17,text: "Your happiness comes more from helping others accomplish things than your own accomplishments."},
{id:18,text: "You are interested in so many things that you find it difficult to choose what to try next."},
{id:19,text: "You are prone to worrying that things will take a turn for the worse."},
{id:20,text: "You avoid leadership roles in group settings."},
{id:21,text: "You are definitely not an artistic type of person."},
{id:22,text: "You think the world would be a better place if people relied more on rationality and less on their feelings."},
{id:23,text: "You prefer to do your chores before allowing yourself to relax."},
{id:24,text: "You enjoy watching people argue."},
{id:25,text: "You tend to avoid drawing attention to yourself."},
{id:26,text: "Your mood can change very quickly."},
{id:27,text: "You lose patience with people who are not as efficient as you."},
{id:28,text: "You often end up doing things at the last possible moment."},
{id:29,text: "You have always been fascinated by the question of what, if anything, happens after death."},
{id:30,text: "You usually prefer to be around others rather than on your own."},
{id:31,text: "You become bored or lose interest when the discussion gets highly theoretical."},
{id:32,text: "You find it easy to empathize with a person whose experiences are very different from yours."},
{id:33,text: "You usually postpone finalizing decisions for as long as possible."},
{id:34,text: "You rarely second-guess the choices that you have made."},
{id:35,text: "After a long and exhausting week, a lively social event is just what you need."},
{id:36,text: "You enjoy going to art museums."},
{id:37,text: "You often have a hard time understanding other people’s feelings."},
{id:38,text: "You like to have a to-do list for each day."},
{id:38,text: "You rarely feel insecure."},
{id:40,text: "You avoid making phone calls."},
{id:41,text: "You often spend a lot of time trying to understand views that are very different from your own."},
{id:42,text: "In your social circle, you are often the one who contacts your friends and initiates activities."},
{id:43,text: "If your plans are interrupted, your top priority is to get back on track as soon as possible."},
{id:44,text: "You are still bothered by mistakes that you made a long time ago."},
{id:45,text: "You rarely contemplate the reasons for human existence or the meaning of life."},
{id:46,text: "Your emotions control you more than you control them."},
{id:47,text: "You take great care not to make people look bad, even when it is completely their fault."},
{id:48,text: "Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts."},
{id:49,text: "When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you."},
{id:50,text: "You would love a job that requires you to work alone most of the time."},
{id:51,text: "You believe that pondering abstract philosophical questions is a waste of time."},
{id:52,text: "You feel more drawn to places with busy, bustling atmospheres than quiet, intimate places."},
{id:53,text: "You know at first glance how someone is feeling."},
{id:54,text: "You often feel overwhelmed."},
{id:55,text: "You complete things methodically without skipping over any steps."},
{id:56,text: "You are very intrigued by things labeled as controversial."},
{id:57,text: "You would pass along a good opportunity if you thought someone else needed it more."},
{id:58,text: "You struggle with deadlines."},
{id:59,text: "You feel confident that things will work out for you."},
      ]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },
    async handleSubmit() {
      try {

        // 发送 POST 请求到后端接口，例如 /api/submit-form
        const response = await axios.post('abc', {ans:this.ans});
        if (response.data.success) {
          // 处理成功后的逻辑...
          console.error('ok'); 
        } else {
          // 处理失败后的逻辑...
          console.error(error); 
        }
      } catch (error) {
        console.error(error); // 处理异常情况...
      }
    },
  
    ansall(ansid){
      if (this.todoid < 6) //this.todos.length
        {
           this.ans.push(ansid)
      this.todoid=this.todoid+1
        }
        else {
          console.log('list is done')
          this.seen=false
        }
  
    }
  }
}
</script>

<template>

  <div v-if="seen">

    <p>{{todos[todoid].id +1}}. {{ todos[todoid].text }}</p>
    <li>
      
      <button @click="ansall(1)">agree</button>
        <button @click="ansall(2)">disagree</button>
    </li>
  </div>
  <p>
    {{ans}}
    {{todos.length}}
    {{todoid}}

    <button v-if="!seen" @click="handleSubmit">submit</button>
  </p>
</template>



<style>
  .home-page{
    margin: 5px;
    margin-bottom: 0;
    padding: 20px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .styling{
    color: rgb(29, 199, 128);
    font-weight: 500;
    text-decoration: none;
  }

  .styling:hover{
    cursor: pointer;
    color: rgb(18, 168, 106);
    font-weight: 500;
    text-decoration: underline;
    transition: 0.2s ease-in-out;

  }

  .home-page h1{
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .home-page h2{
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
  }

  button {
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    color: white;
    background-color: rgb(42, 219, 145);
    padding: 10px 30px 10px 30px;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  button:hover{
    cursor: pointer;
    background-color: rgb(29, 199, 128);
    transition: 0.2s ease-in;
  }
</style>

<!-- 
<script>
import axios from 'axios'; // 引入 Axios 库，可以用于发送 HTTP 请求

export default {
  data() {
    return {
      user: {
        name: '',
        // 其他属性...
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 将表单数据转换为 JSON 格式
        const formData = new FormData();
        for (const key in this.user) {
          formData.append(key, this.user[key]);
        }
        // 发送 POST 请求到后端接口，例如 /api/submit-form
        const response = await axios.post('/api/hello', formData);
        if (response.data.success) {
          // 处理成功后的逻辑...
          console.error('ok'); 
        } else {
          // 处理失败后的逻辑...
          console.error(error); 
        }
      } catch (error) {
        console.error(error); // 处理异常情况...
      }
    },
  },
};
</script> -->