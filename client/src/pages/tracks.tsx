import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__";
import {useQuery} from "@apollo/client";
import TrackCard from "../containers/track-card";


const GetCats = gql(`
  query SpaceCats {
    tracks {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(GetCats);
  if(loading) return "loading....";
  if(error) return "error";
  if(!data?.tracks.length) return "no data";

  return <Layout grid>
    {data.tracks.map(track =>
        <TrackCard key={track.id} track={track}/>
    )}
  </Layout>;
};

export default Tracks;
