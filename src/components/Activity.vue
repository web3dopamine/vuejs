<template>
  <div class="container">
    <div class="holder">
      <!-- Add Activity Form -->
      <form @submit.prevent="addActivity">
        <input type="text" placeholder="Enter your activity..." v-model="activity" v-validate="'min:5'" name="activity"/>
        <transition name="alert-in">
        <p class="alert" v-if="errors.has('activity')"> {{ errors.first('activity') }} </p>
        <p class="alert" v-if="activity.length >= 5">Press Enter</p>
        </transition>
      </form>
      <!-- List Activity  -->
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in activities" :key='index'>{{data.activity}}
          <toggle-button :value='data.value' :key='index' @change="onChangeEventHandler(index)" :labels="{checked: 'On', unchecked: 'Off'}"/>
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
      activities: []
    }
  },
  mounted () {
    // list activities from localstorage
    if (localStorage.getItem('activities')) {
      try {
        this.activities = JSON.parse(localStorage.getItem('activities'))
        console.log(this.activities)
      } catch (e) {
        localStorage.removeItem('activities')
      }
    }
  },
  methods: {
    // add Activity after checking validations
    addActivity () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (!this.activity) return
          this.activities.push({activity: this.activity, value: true})
          this.activity = ''
          this.saveActivity()
        } else {
          console.log('not valid')
        }
      })
    },
    // remove activity
    remove (id) {
      this.activities.splice(id, 1)
      this.saveActivity()
    },
    // save activity to localstorage
    saveActivity () {
      let parsed = JSON.stringify(this.activities)
      localStorage.setItem('activities', parsed)
    },
    // update activity from incomplete to complete
    onChangeEventHandler (i) {
      this.activities[i]['value'] = !this.activities[i]['value']
      this.saveActivity()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "../assets/css/style.css"
</style>
