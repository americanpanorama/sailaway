import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import xml2js from 'xml2js';
import '../../styles/PageViewer/Metadata.scss';

const Metadata = ({ setShowMetadata }) => {
  const { id } = useParams();
  const [metadata, setMetdata] = useState();
  const url = `${process.env.PUBLIC_URL}/static/metadata/${id}.xml`;


  useEffect(() => {
    axios.get(url)
      .then((response) => {
        xml2js.parseString(response.data.replaceAll("mods:", ""), (err, result) => {
          const rawJson = result.mods;
          const title = rawJson.titleInfo[0].title[0];
          const authors = {};
          if (rawJson.name && rawJson.name.length > 0) {
            rawJson.name.forEach((name) => {
              const { type } = name['$'];
              if (type) {
                authors[type] = authors[type] || [];
                let aName = name.namePart;
                if (name["role"] && name["role"].length > 0) {
                  const roles = name["role"].filter(role => role["roleTerm"]).map(role => role["roleTerm"]);
                  if (roles.length > 0) {
                    aName = `${aName}, ${roles.join(', ')}`;
                  }
                }
                authors[type].push(aName);
              }
            })
          }
          let subjects = [];
          let genres = [];
          if (rawJson["subject"]) {
            rawJson["subject"]
              .filter(subject => subject["topic"])
              .forEach(subject => {
                subject.topic.forEach(topic => {
                  if (typeof topic === "string") {
                    subjects.push(`${(subject.name && subject.name[0] && subject.name[0].namePart) ? `${subject.name[0].namePart} ` : ''}${topic}`);
                  }
                  if (typeof topic === "object" && topic['_']) {
                    subjects.push(`${(subject.name && subject.name[0] && subject.name[0].namePart) ? `${subject.name[0].namePart} ` : ''}${topic['_']}`);
                  }
                })
              })
            rawJson["subject"]
              .filter(subject => subject["genre"])
              .forEach(subject => {
                subject.genre.forEach(genre => {
                  if (typeof genre === "string") {
                    genres.push(`${(subject.name && subject.name[0] && subject.name[0].namePart) ? `${subject.name[0].namePart} ` : ''}${genre}`);
                  }
                  if (typeof genre === "object" && genre['_']) {
                    genres.push(`${(subject.name && subject.name[0] && subject.name[0].namePart) ? `${subject.name[0].namePart} ` : ''}${genre['_']}`);
                  }
                })
              })
          }

          let physicalLocation;
          if (rawJson.location) {
            physicalLocation = rawJson.location
              .filter(location => location.physicalLocation)
              .map(location => location.physicalLocation)
              .join("; ");
          }

          setMetdata({
            title,
            authors,
            subjects,
            genres,
            physicalLocation,
          });
        });
      });
  }, [id, url]);

  return (

    <div id='metadata'>
      {(metadata) && (
        <>
          <div
            
            className='close'
          >
            <span onClick={() => setShowMetadata(false)}>close</span>
          </div>
          <h1>Metadata (MODS)</h1>
          <div id='data'>
            <h3>Title</h3>
            <div>{metadata.title}</div>
            {(Object.keys(metadata.authors).length > 0) && (
              <>
                {Object.keys(metadata.authors).map(type => (
                  <>
                    <h3>{`Author${metadata.authors[type] > 1 ? 's' : ''} (${type})`}</h3>
                    <ul>
                      {metadata.authors[type].map(author => (
                        <li
                          key={author}
                        >
                          {author}
                        </li>
                      ))}
                    </ul>
                  </>
                ))}

              </>
            )}
            {(metadata.subjects.length > 0) && (
              <>
                <h3>Subjects</h3>
                <ul>
                  {metadata.subjects.map(subject => (
                    <li
                      key={subject}
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {(metadata.genres.length > 0) && (
              <>
                <h3>Genres</h3>
                <ul>
                  {metadata.genres.map(subject => (
                    <li
                      key={subject}
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {(metadata.physicalLocation) && (
              <>
                <h3>Physical Location</h3>
                <div>{metadata.physicalLocation}</div>
              </>
            )}
          </div>
        </>
      )}

      <div className='rawxml'>
        <a href={url} target="_blank">Complete MODS Metadata (XML)</a>
      </div>
    </div>
  )

};

export default Metadata;