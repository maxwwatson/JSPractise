Whenever you assign to the innerHTML of a container (even if you're just concatenating with existing HTML), the container's contents will be removed, and the new innerHTML string will be parsed and then rendered by the browser. So, listeners that used to be attached to anything inside of the container will no longer work.

