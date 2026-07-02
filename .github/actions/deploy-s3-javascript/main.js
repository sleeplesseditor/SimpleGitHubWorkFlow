import * as core from '@actions/core';
import * as exec from '@actions/exec';

function run() {
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Deploying to AWS S3 using JavaScript...');
}

run();