#!/bin/bash
cd /home/kavia/workspace/code-generation/cricketmanager-roadmap-36167-896d3b29/cricketmanager_roadmap
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

