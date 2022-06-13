
import * as React from 'react';

import {
  useCatalog,
  FlexSection,
  Flex,
  WideTile,
  SectionHeader,
  LoadingAnimation,
} from '@redocly/developer-portal/ui';

export function Catalog() {
  const { apis, loadingRbac } = useCatalog({ offset: 0, limit: 10 });
  console.log('apis', apis);
  let apisTemp = [{link: 'link1', title: 'title1', defaultVersion: {metadata: {tags: ['tag1', 'tag2']}}},
  {link: 'link2', title: 'title2', defaultVersion: {metadata: {tags: ['tag1', 'tag2']}}},
  {link: 'link3', title: 'title3', defaultVersion: {metadata: {tags: ['tag1', 'tag2']}}}]

  // if (!apis.length) {
  //   return "You don't have access to any API";
  // }

  return (
    <>
      <Flex flexDirection="row" alignItems="baseline">
        <SectionHeader> API Catalog</SectionHeader>
        {loadingRbac ? <LoadingAnimation size={20} /> : null}
      </Flex>
      <FlexSection justifyContent="space-around" flexWrap="wrap">
        {apisTemp.map(api => (
          <WideTile to={api.link} header={api.title || api.link}>
            Tags: {api.defaultVersion.metadata?.tags.map(tag => <span> {tag} </span>)}
          </WideTile>
        ))}
      </FlexSection>
    </>
  );
}