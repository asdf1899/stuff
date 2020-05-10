# Stuff

Lightweight personal journal that parse markdown writing into articles.

### ToDo

- Load markdowns from firebase
- Automatic darkmode based on time
   ```
        const date = new Date();
        const now = date.getHours();
        if (now > 20 && now < 7){
            this.setDark();
        }
    ```
- Add photography section

Built using [Vuejs](https://vuejs.org/), [vue-markdown](https://github.com/miaolz123/vue-markdown), [tufte-css](https://github.com/edwardtufte/tufte-css)