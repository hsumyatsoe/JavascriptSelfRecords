function brothersInTheBar(glasses) {

            var org_length = glasses.length;
            var count = 0;

            for(var i=glasses.length-1; i>=0; i--){
                if(glasses[i] == glasses[i-1] && glasses[i] == glasses[i-2]){
                    count += 1;
                    glasses.splice(i-2,3)
                }
            }

    return ((org_length-glasses.length)/3);
}
