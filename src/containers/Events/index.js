import { graphql, compose } from "react-apollo";
import { getEventsQuery, getEventsQueryArgs } from "../../queries/event";
import Events from '../../components/Events';

export default compose(graphql(getEventsQuery, getEventsQueryArgs))(Events);
// export {default} from '../../components/Events'; 