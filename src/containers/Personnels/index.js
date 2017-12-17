import { graphql, compose } from "react-apollo";
import { getEventsQuery, getEventsQueryArgs } from "../../queries/event";
import Personnels from "../../components/Personnels";

export default compose(graphql(getEventsQuery, getEventsQueryArgs))(Personnels);
