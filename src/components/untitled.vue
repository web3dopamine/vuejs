<template>
  <div class="container">
    <div class="holder">
      <form @submit.prevent="addActivity">
        <input type="text" placeholder="Enter your activity..." v-model="activity" v-validate="'min:5'" name="activity"/>
        <transition name="alert-in">
        <p class="alert" v-if="errors.has('activity')"> {{ errors.first('activity') }} </p>
        <p class="alert" v-if="activity.length >= 5">Press Enter</p>
        </transition>
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in activities" :key='index'>{{data.activity}}
          <toggle-button :value="true"
               :labels="{checked: 'Incomplete', unchecked: 'Complete'}"/>
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
      <p>These are the activities you need to do.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activities',
  data () {
    return {
      activity: '',
      activities: [
        {'activity': 'vue.js'},
        {'activity': 'Blockchian Expert'}
      ],
      complete: localStorage.getItem('complete') || false
    }
  },
  mounted () {
    if (localStorage.getItem('activities')) {
      try {
        this.activities = JSON.parse(localStorage.getItem('activities'))
      } catch (e) {
        localStorage.removeItem('activities')
      }
    }
  },
  methods: {
    addActivity () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (!this.activity) return
          this.activities.push({activity: this.activity})
          this.activity = ''
          this.saveActivity()
        } else {
          console.log('not valid')
        }
      })
    },
    remove (id) {
      this.activities.splice(id, 1)
      this.saveActivity()
    },
    saveActivity () {
      let parsed = JSON.stringify(this.activities)
      localStorage.setItem('activities', parsed)
    }
  },
  watch: {
    complete: function() {
      localStorage.setItem("complete", JSON.stringify(this.complete));
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
   input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
  animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  i {
    float : right;
  }
  i:hover {
    cursor: pointer;
  }
  [v-cloak] {
    display: none;
  }
</style>
