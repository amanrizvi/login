  var vue = new Vue({
    el: '#demo',
    
 
  data: {
        comments: [
            {author: 'Eragon', content: 'hii'}
        ]
    },
    
    methods:{
        addComment: function (){
            if(this.author && this.comment){
                this.comments.push({author: this.author, content: this.comment})
            }else{
                alert('Fields Empty');
            }
        },
        
        removeComment: function (index){
            this.comments.remove(index);
        }
    },
    
    filters: {
        marked: marked
    }
})
