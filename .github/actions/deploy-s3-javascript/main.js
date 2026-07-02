import * as core from '@actions/core';
import * as exec from '@actions/exec';

// NOTE: Requires AWS S3 Bucket and secrets to be added to repo

function run() {
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Deploying to AWS S3 using JavaScript...');

    const websiteUrl = `https://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}

run();