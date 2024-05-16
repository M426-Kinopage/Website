var application = new Vue({
    el: '#fetchAlldiv',
            data:{
                allData:'',
    },
    methods:{
        fetchAllData: function() {
            var self = this; // Um auf die Vue-Instanz in der Axios-Rückruffunktion zugreifen zu können
            axios.post('fetchall.php', {
                action: 'fetchall'
            }).then(function(response) {
                self.$set(self, 'allData', response.data); // Daten setzen und Vue.js über die Änderung informieren
            });
        }
        
    },
    created:function(){
        this.fetchAllData();
    }
});