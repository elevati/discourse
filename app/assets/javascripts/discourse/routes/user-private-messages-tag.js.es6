import createPMRoute from "discourse/routes/build-private-messages-route";

export default createPMRoute('tags', 'private-messages-tags').extend({
    model(params) {
      const username = this.modelFor("user").get("username_lower");
      return this.store.findFiltered("topicList", {
        filter: `topics/private-messages-tag/${username}/${params.id}`
      });
    }
});
