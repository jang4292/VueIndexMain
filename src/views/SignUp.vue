<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 >
            <v-card class="elevation-12">
              <v-toolbar dark color="dark">
                <v-toolbar-title>REGISTER FORM</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="Name" label="Name" type="text" v-model="name" autocomplete="username"></v-text-field>
                  <v-text-field name="Email" label="Email" type="text" v-model="email" autocomplete="email"></v-text-field>
                  <v-text-field id="Password" name="Password" label="Password" type="password" v-model="pw" autocomplete="new-password"></v-text-field>
                  <v-text-field id="RE-Password" name="PasswordCheck" label="Check Password" type="password" v-model="checkPw" autocomplete="new-password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onRegister()">REGISTER</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      name:null,
      email:null,
      pw:null,
      checkPw:null
    }),
    props: {
      source: String
    },
    methods:{
      onRegister(){
        if(!this.name || this.name.length < 3) {
            alert('이름이 잘못 입력되었습니다!');
            return;
        }

        if(!this.email || this.email.length < 8) {
            alert('이메일이 잘못 입력되었습니다!');
            return;
        }

        const eMailRegex = /([\w-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; 
        const isCorrectEmailPattern =  eMailRegex.test(this.email)
        if(!isCorrectEmailPattern) {
            alert('이메일이 형태가 아닙니다.');
            return;
        }

        if(!this.pw || !this.checkPw ||this.pw.length < 8 || this.checkPw.length < 8) {
            alert('비밀번호를 다시 입력해주세요!');
            return;
        }

        if(this.pw !== this.checkPw) {
            alert('비밀번호 확인을 해주세요');
            return;
        }

        const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        const isCorrectPwPattern = pwRegex.test(this.pw)
        if(!isCorrectPwPattern) {
            alert('잘못된 비밀번호 형태입니다..');
            return;
        }

        alert('회원가입 기능이 개발중입니다.');
        return;

        // var data = {
        //   name:this.name,
        //   eMail:this.email,
        //   password: this.pw
        // };

        // fetch('http://yhjang1.shop:3000/register', {
        //   method: 'POST',
        //   body: data,
        //   headers:{
        //     'Content-Type': 'application/json'
        //   }
        // }).then(res => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        // .catch(error => console.error('Error:', error));
      }
    }
  }
</script>